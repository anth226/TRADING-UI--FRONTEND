import { useCallback, useState } from 'react';

export const useCheckbox = (initialState = true) => {
  const [checkbox, setCheckbox] = useState(initialState);
  
  const onCheckboxChange = useCallback(() => {
    setCheckbox(((prevState) => !prevState));
  }, []);
  
  return {
    checkbox,
    onCheckboxChange,
  };
};
