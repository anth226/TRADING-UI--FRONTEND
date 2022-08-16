import assert from "assert";
import { BigNumber } from "ethers";
/**
 * State variables read from the blockchain.
 *
 * @public
 */
export interface OptionBlitzStoreBaseState {
  usdcBalance: BigNumber;
  usdcAllowance: BigNumber;
  ethBalance: BigNumber;
}

/**
 * Type of {@link OptionBlitzStore}'s {@link OptionBlitzStore.state | state}.
 *
 * @remarks
 * It combines all properties of {@link OptionBlitzStoreBaseState} 
 * with optional extra state added by the particular `OptionBlitzStore` implementation.
 *
 * The type parameter `T` may be used to type the extra state.
 *
 * @public
 */
export type OptionBlitzStoreState<T = unknown> = OptionBlitzStoreBaseState & T;

/**
 * Parameters passed to {@link OptionBlitzStore} listeners.
 *
 * @remarks
 * Use the {@link OptionBlitzStore.subscribe | subscribe()} function to register a listener.
 
 * @public
 */
export interface OptionBlitzStoreListenerParams<T = unknown> {
  /** The entire previous state. */
  newState: OptionBlitzStoreState<T>;

  /** The entire new state. */
  oldState: OptionBlitzStoreState<T>;

  /** Only the state variables that have changed. */
  stateChange: Partial<OptionBlitzStoreState<T>>;
}

const strictEquals = <T>(a: T, b: T) => a === b;
const eq = <T extends { eq(that: T): boolean }>(a: T, b: T) => a.eq(b);
const equals = <T extends { equals(that: T): boolean }>(a: T, b: T) => a.equals(b);

const wrap = <A extends unknown[], R>(f: (...args: A) => R) => (...args: A) => f(...args);

const difference = <T>(a: T, b: T) =>
  Object.fromEntries(
    Object.entries(a).filter(([key, value]) => value !== (b as Record<string, unknown>)[key])
  ) as Partial<T>;

/**
 * Abstract base class of OptionBlitz data store implementations.
 *
 * @remarks
 * The type parameter `T` may be used to type extra state added to {@link OptionBlitzStoreState} by the
 * subclass.
 *
 * Implemented by {@link @OptionBlitz/lib-ethers#BlockPolledOptionBlitzStore}.
 *
 * @public
 */
export abstract class OptionBlitzStore<T = unknown> {
  /** Turn console logging on/off. */
  logging = false;

  /**
   * Called after the state is fetched for the first time.
   *
   * @remarks
   * See {@link OptionBlitzStore.start | start()}.
   */
  onLoaded?: () => void;

  /** @internal */
  protected _loaded = false;

  private _baseState?: OptionBlitzStoreBaseState;
  private _extraState?: T;

  private _updateTimeoutId: ReturnType<typeof setTimeout> | undefined;
  private _listeners = new Set<(params: OptionBlitzStoreListenerParams<T>) => void>();

  /**
   * The current store state.
   *
   * @remarks
   * Should not be accessed before the store is loaded. Assign a function to
   * {@link OptionBlitzStore.onLoaded | onLoaded} to get a callback when this happens.
   *
   * See {@link OptionBlitzStoreState} for the list of properties returned.
   */
  get state(): OptionBlitzStoreState<T> {
    return Object.assign({}, this._baseState, this._extraState);
  }

  /** @internal */
  protected abstract _doStart(): () => void;

  public abstract refresh(): void;
  /**
   * Start monitoring the blockchain for OptionBlitz state changes.
   *
   * @remarks
   * The {@link OptionBlitzStore.onLoaded | onLoaded} callback will be called after the state is fetched
   * for the first time.
   *
   * Use the {@link OptionBlitzStore.subscribe | subscribe()} function to register listeners.
   *
   * @returns Function to stop the monitoring.
   */
  start(): () => void {
    const doStop = this._doStart();

    return () => {
      doStop();

      this._cancelUpdateIfScheduled();
    };
  }

  private _cancelUpdateIfScheduled() {
    if (this._updateTimeoutId !== undefined) {
      clearTimeout(this._updateTimeoutId);
    }
  }

  private _scheduleUpdate() {
    this._cancelUpdateIfScheduled();

    this._updateTimeoutId = setTimeout(() => {
      this._updateTimeoutId = undefined;
      console.log('scheduled recalc(no blockchain refresh)');
      this._update();
    }, 30000);
  }

  private _logUpdate<U>(name: string, next: U, show?: (next: U) => string): U {
    if (this.logging) {
      console.log(`${name} updated to ${show ? show(next) : next}`);
    }

    return next;
  }

  private _updateIfChanged<U>(
    equals: (a: U, b: U) => boolean,
    name: string,
    prev: U,
    next?: U,
    show?: (next: U) => string
  ): U {
    return next !== undefined && !equals(prev, next) ? this._logUpdate(name, next, show) : prev;
  }

  private _reduce(
    baseState: OptionBlitzStoreBaseState,
    baseStateUpdate: Partial<OptionBlitzStoreBaseState>
  ): OptionBlitzStoreBaseState {
    return {
      usdcBalance: this._updateIfChanged(
        eq,
        "usdcBalance",
        baseState.usdcBalance,
        baseStateUpdate.usdcBalance
      ),
      usdcAllowance: this._updateIfChanged(
        eq,
        "usdcAllowance",
        baseState.usdcAllowance,
        baseStateUpdate.usdcAllowance
      ),
      ethBalance: this._updateIfChanged(
        eq,
        "ethBalance",
        baseState.ethBalance,
        baseStateUpdate.ethBalance
      ),
    };
  }


  /** @internal */
  protected abstract _reduceExtra(extraState: T, extraStateUpdate: Partial<T>): T;

  private _notify(params: OptionBlitzStoreListenerParams<T>) {
    // Iterate on a copy of `_listeners`, to avoid notifying any new listeners subscribed by
    // existing listeners, as that could result in infinite loops.
    //
    // Before calling a listener from our copy of `_listeners`, check if it has been removed from
    // the original set. This way we avoid calling listeners that have already been unsubscribed
    // by an earlier listener callback.
    [...Array.from(this._listeners)].forEach(listener => {
      if (this._listeners.has(listener)) {
        listener(params);
      }
    });
  }

  /**
   * Register a state change listener.
   *
   * @param listener - Function that will be called whenever state changes.
   * @returns Function to unregister this listener.
   */
  subscribe(listener: (params: OptionBlitzStoreListenerParams<T>) => void): () => void {
    const uniqueListener = wrap(listener);

    this._listeners.add(uniqueListener);

    return () => {
      this._listeners.delete(uniqueListener);
    };
  }

  /** @internal */
  protected _load(baseState: OptionBlitzStoreBaseState, extraState?: T): void {
    assert(!this._loaded);

    this._baseState = baseState;
    this._extraState = extraState;
    this._loaded = true;

    this._scheduleUpdate();

    if (this.onLoaded) {
      this.onLoaded();
    }
  }

  /** @internal */
  protected _update(
    baseStateUpdate?: Partial<OptionBlitzStoreBaseState>,
    extraStateUpdate?: Partial<T>
  ): void {
    assert(this._baseState);

    const oldState = this.state;

    if (baseStateUpdate) {
      this._baseState = this._reduce(this._baseState, baseStateUpdate);
    }

    if (extraStateUpdate) {
      assert(this._extraState);
      this._extraState = this._reduceExtra(this._extraState, extraStateUpdate);
    }

    this._scheduleUpdate();

    this._notify({
      newState: this.state,
      oldState,
      stateChange: difference(this.state, oldState)
    });
  }
}
