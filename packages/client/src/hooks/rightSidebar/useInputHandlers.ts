import { ChangeEventHandler, useCallback, useState } from 'react';

export const useInputHandlers = (initialValue = '0') => {
  const [value, setValue] = useState(initialValue);
  
  const firstBtnClick = useCallback(() => {
    const intValue = parseFloat(value) + 1;
    setValue(`${intValue}`);
  }, [value]);
  
  const secondBtnClick = useCallback(() => {
    const intValue = parseFloat(value) - 1;
    setValue(`${intValue}`);
  }, [value]);
  
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setValue(e.currentTarget.value);
  }, []);
  
  return {
    value,
    firstBtnClick,
    secondBtnClick,
    onChange,
  };
};
