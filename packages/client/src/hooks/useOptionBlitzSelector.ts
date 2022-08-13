import { useEffect, useReducer } from "react";

import { OptionBlitzStoreState } from "./OptionBlitzStore";

import { equals } from "./equals";
import { useOptionBlitzStore } from "./useOptionBlitzStore";

export const useOptionBlitzSelector = <S, T>(select: (state: OptionBlitzStoreState<T>) => S): S => {
  const store = useOptionBlitzStore<T>();
  const [, rerender] = useReducer(() => ({}), {});

  useEffect(
    () =>
      !store 
      ? ()=>{}
      : store.subscribe(({ newState, oldState }) => {
        if (!equals(select(newState), select(oldState))) {
          rerender();
        }
      }),
    [store, select]
  );

  return select(store?.state);
};
