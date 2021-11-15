import {
  ChangeEventHandler, useCallback, useEffect, useState, 
} from 'react';

export const useInputHandlers = (initialValue = '0', callback?: (value: string) => void) => {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => setValue(initialValue), [initialValue]);
  
  const firstBtnClick = useCallback(() => {
    const intValue = parseFloat(value) + 1;
    setValue(`${intValue}`);

    if (!callback) return;
    callback(`${intValue}`);
  }, [value, callback]);
  
  const secondBtnClick = useCallback(() => {
    const intValue = parseFloat(value) - 1;
    setValue(`${intValue}`);
    
    if (!callback) return;
    callback(`${intValue}`);
  }, [value, callback]);
  
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setValue(e.currentTarget.value);
    if (!callback) return;
    callback(e.currentTarget.value);
  }, [callback]);
  
  return {
    value,
    firstBtnClick,
    secondBtnClick,
    onChange,
  };
};
