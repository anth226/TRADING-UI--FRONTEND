import { OptionBlitzStore } from "./OptionBlitzStore";
import React, { createContext, useEffect, useState } from "react";

export const OptionBlitzStoreContext = createContext<OptionBlitzStore | undefined>(undefined);

type OptionBlitzStoreProviderProps = {
  store?: OptionBlitzStore;
  children?: React.ReactNode;
};

export const OptionBlitzStoreProvider: React.FC<OptionBlitzStoreProviderProps> = ({
  store,
  children
}) => {
  const [loadedStore, setLoadedStore] = useState<OptionBlitzStore>();

  useEffect(() => {
    if (store) {
      store.onLoaded = () => setLoadedStore(store);
      const stop = store.start();
      console.log(`start store tracking`)
      return () => {
        console.log(`unmount store`);
        store.onLoaded = undefined;
        setLoadedStore(undefined);
        stop();
      };  
    }
  }, [store]);

  return <OptionBlitzStoreContext.Provider value={loadedStore}>{children}</OptionBlitzStoreContext.Provider>;
};
