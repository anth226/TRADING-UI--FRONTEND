import { useCallback, useEffect, useReducer, useRef } from "react";

import { OptionBlitzStoreState } from "./OptionBlitzStore";

import { equals } from "./equals";
import { useOptionBlitzStore } from "./useOptionBlitzStore";

export type OptionBlitzStoreUpdate<T = unknown> = {
  type: "updateStore";
  newState: OptionBlitzStoreState<T>;
  oldState: OptionBlitzStoreState<T>;
  stateChange: Partial<OptionBlitzStoreState<T>>;
};

export const useOptionBlitzReducer = <S, A, T>(
  reduce: (state: S, action: A | OptionBlitzStoreUpdate<T>) => S,
  init: (storeState: OptionBlitzStoreState<T>) => S
): [S, (action: A | OptionBlitzStoreUpdate<T>) => void] => {
  const store = useOptionBlitzStore<T>();
  const oldStore = useRef(store);
  const state = useRef(init(store.state));
  const [, rerender] = useReducer(() => ({}), {});

  const dispatch = useCallback(
    (action: A | OptionBlitzStoreUpdate<T>) => {
      const newState = reduce(state.current, action);

      if (!equals(newState, state.current)) {
        state.current = newState;
        rerender();
      }
    },
    [reduce]
  );

  useEffect(() => store.subscribe(params => dispatch({ type: "updateStore", ...params })), [
    store,
    dispatch
  ]);

  if (oldStore.current !== store) {
    state.current = init(store.state);
    oldStore.current = store;
  }

  return [state.current, dispatch];
};
