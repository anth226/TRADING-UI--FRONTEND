import { useCallback, useState } from 'react';

export const useCollapse = (initialState = true) => {
  const [isActive, setActive] = useState(initialState);

  const onChange = useCallback(() => {
    setActive(((prevState) => !prevState));
  }, []);

  return {
    isActive,
    onChange,
  };
};
