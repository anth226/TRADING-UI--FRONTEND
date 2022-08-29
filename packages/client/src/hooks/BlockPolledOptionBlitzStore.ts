import { AddressZero } from '@ethersproject/constants';
import { BigNumber } from 'ethers';
import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { OptionBlitzConnection } from './OptionBlitzConnection';
import { OptionBlitzStore, OptionBlitzStoreState, OptionBlitzStoreBaseState } from './OptionBlitzStore';

const ZERO = BigNumber.from(0);

export type Resolved<T> = T extends Promise<infer U> ? U : T;
export type ResolvedValues<T> = { [P in keyof T]: Resolved<T[P]> };

export const promiseAllValues = <T>(object: T): Promise<ResolvedValues<T>> => {
  const keys = Object.keys(object);

  return Promise.all(Object.values(object)).then((values) =>
    Object.fromEntries(values.map((value, i) => [keys[i], value]))) as Promise<ResolvedValues<T>>;
};

/**
 * Extra state added to {@link OptionBlitzStoreState} by
 * {@link BlockPolledOptionBlitzStore}.
 *
 * @public
 */
export interface BlockPolledOptionBlitzStoreExtraState {
  /**
     * Number of block that the store state was fetched from.
     *
     * @remarks
     * May be undefined when the store state is fetched for the first time.
     */
  blockTag?: number;

  /**
     * Timestamp of latest block (number of seconds since epoch).
     */
  blockTimestamp: number;
}

/**
 * The type of {@link BlockPolledOptionBlitzStore}'s
 * {@link OptionBlitzStore.state | state}.
 *
 * @public
 */
export type BlockPolledOptionBlitzStoreState = OptionBlitzStoreState<BlockPolledOptionBlitzStoreExtraState>;

/**
 * Ethers-based {@link @OptionBlitz/lib-base#OptionBlitzStore} that updates state whenever there's a new
 * block.
 *
 * @public
 */
export class BlockPolledOptionBlitzStore extends OptionBlitzStore<BlockPolledOptionBlitzStoreExtraState> {
  readonly connection: OptionBlitzConnection;

  private _provider: Provider;

  private _requestRefreshOn: Date;

  private _refreshedOn: Date;

  private _lastBaseState: OptionBlitzStoreBaseState;

  private _lastExtraState: BlockPolledOptionBlitzStoreExtraState;

  private _storeRefreshInterval?: number;

  constructor(connection: OptionBlitzConnection) {
    super();
    this.connection = connection;
    this._provider = connection.provider;
    this._requestRefreshOn = new Date();
    this._refreshedOn = new Date(this._requestRefreshOn.getTime() - 1);
    this._storeRefreshInterval = connection.storeRefreshInterval;
    this._lastBaseState = {
      usdcAllowance: ZERO,
      usdcBalance: ZERO,
      ethBalance: ZERO,
    };
    this._lastExtraState = {
      blockTag: 0,
      blockTimestamp: 0,
    };
  }

  public refresh(): void {
    this._requestRefreshOn = new Date();
    console.log(`request refresh OptionBlitz store status ${this._requestRefreshOn.toString()}`);
  }

  private async _get(
    blockTag?: number,
  ): Promise<[baseState: OptionBlitzStoreBaseState, extraState: BlockPolledOptionBlitzStoreExtraState]> {
    const { contracts, account } = this.connection;
    const [expiredFor, age] = [
      this._requestRefreshOn.getTime() - this._refreshedOn.getTime(),
      (new Date()).getTime() - this._refreshedOn.getTime(),
    ];
    const MIN_REFRESH_INTERVAL_IN_SECONDS = 61; // 120 is a better time for production
    let storeRefreshInterval = this._storeRefreshInterval ?? MIN_REFRESH_INTERVAL_IN_SECONDS;
    storeRefreshInterval = storeRefreshInterval < MIN_REFRESH_INTERVAL_IN_SECONDS ? MIN_REFRESH_INTERVAL_IN_SECONDS : storeRefreshInterval;
    if (// manual refresh request
      expiredFor > 0
            ||
            // older than 120s
            age >= storeRefreshInterval * 1000
    ) {
      console.log(`refresh OptionBlitz store ${this._storeRefreshInterval} ${this._requestRefreshOn.toString()} ${this._refreshedOn.toString()} ${expiredFor} ${age}`);
      const {
        blockTimestamp,
        ...baseState
      } = await promiseAllValues({
        ...(!account ? {
          blockTimestamp: contracts?.Multicall2.getCurrentBlockTimestamp() || ZERO,
          ...this._lastBaseState,
        } : {
          blockTimestamp: contracts?.Multicall2.getCurrentBlockTimestamp() || ZERO,
          usdcAllowance: contracts?.USDC.allowance(account, contracts.Treasury.address) || ZERO,
          usdcBalance: contracts?.USDC.balanceOf(account) || ZERO,
          ethBalance: this._provider.getBalance(account, blockTag),
        }),
      });
      this._refreshedOn = new Date();
      this._lastBaseState = {
        ...baseState,
      };
      this._lastExtraState = {
        blockTag,
        blockTimestamp: blockTimestamp.toNumber(),
      };
    } else {
      console.log(`skip OptionBlitz store refresh ${this._storeRefreshInterval} ${this._requestRefreshOn} ${this._refreshedOn} ${expiredFor} ${age}`);
    }
    return [this._lastBaseState, this._lastExtraState];
  }

  /** @internal @override */
  protected _doStart(): () => void {
    this._get().then((state) => {
      if (state && !this._loaded) {
        this._load(...state);
      }
    });

    const blockListener = async (blockTag: number) => {
      console.log(`block listening ${blockTag}`);
      const state = await this._get(blockTag);

      if (this._loaded) {
        this._update(...state);
      } else {
        this._load(...state);
      }
    };

    this._provider.on('block', blockListener);

    return () => {
      this._provider.off('block', blockListener);
    };
  }

  /** @internal @override */
  protected _reduceExtra = (
    oldState: BlockPolledOptionBlitzStoreExtraState,
    stateUpdate: Partial<BlockPolledOptionBlitzStoreExtraState>,
  ): BlockPolledOptionBlitzStoreExtraState => ({
    blockTag: stateUpdate.blockTag ?? oldState.blockTag,
    blockTimestamp: stateUpdate.blockTimestamp ?? oldState.blockTimestamp,
  });
}
