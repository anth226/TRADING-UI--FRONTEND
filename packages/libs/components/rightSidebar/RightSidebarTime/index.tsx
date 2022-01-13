import React, { FC, useMemo } from 'react';
import {
  OnChangeValue, 
} from 'react-select';
import { timeOptionsMock } from '../../../mock/rightSidebar/timeSelectOption';
import { DefaultSelect, OptionItem } from '../../inputs/DefaultSelect';

type SizeType = 'normal' | 'small';

export interface Time {
  value: string
}

interface Props {
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
  type?: SizeType
}

const RightSidebarTime: FC<Props> = ({
  onChange,
  className,
  type = 'normal',
}) => {
  const options = useMemo<OptionItem[]>(() => (
    timeOptionsMock.map((i) => ({ label: i.value, value: i.value }))
  ), []);
  
  return (
    <DefaultSelect 
      onChange={onChange}
      className={className}
      type={type}
      title="Expiry"
      options={options} 
      defaultValue={options[0]}
    />
  );
};

export { RightSidebarTime };
