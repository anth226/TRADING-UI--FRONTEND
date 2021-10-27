import React, { FC } from 'react';
import Select, {
  OnChangeValue, SingleValueProps, components, OptionProps,
} from 'react-select';
import styles from './styles.module.scss';
import { getCustomStyles } from '../../../constants/select';

export interface OptionItem {
  value: string
  label?: string
}

interface Props {
  options: OptionItem[]
  defaultValue?: OptionItem
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
}

const customStyles = getCustomStyles<OptionItem>();

customStyles.indicatorSeparator = () => ({ display: 'none' });
customStyles.valueContainer = (provided) => ({
  ...provided,
  padding: 8,
});
customStyles.option = (provided, state) => ({
  ...provided,
  color: 'var(--color-text)',
  backgroundColor: state.isSelected ? '#192235' : 'transparent',
  padding: '6px 0',
  borderRadius: 4,
  fontSize: 10,
  '&:active': {
    backgroundColor: 'transparent',
  },
});
customStyles.input = (provided) => ({
  ...provided,
  color: 'var(--color-green)',
});
customStyles.indicatorsContainer = (provided) => ({
  ...provided,
});

const Option = (optionProps: OptionProps<OptionItem, false>) => {
  const { data: { label, value } } = optionProps;

  return (
    <components.Option {...optionProps}>
      <p>{label || value}</p>
    </components.Option>
  );
};

const SingleValue = (singleValueProps: SingleValueProps<OptionItem, false>) => {
  const {
    data: {
      value,
      label,
    },
  } = singleValueProps;
  
  return (
    <components.SingleValue {...singleValueProps}>
      <p className={styles.value}>{label || value}</p>
    </components.SingleValue>
  );
};

const DefaultSelect: FC<Props> = ({
  onChange,
  className,
  options,
  defaultValue,
}) => (
  <Select<OptionItem, false>
    className={className}
    onChange={onChange}
    options={options}
    styles={customStyles}
    components={{ Option, SingleValue }}
    isSearchable={false}
    defaultValue={defaultValue}
  />
);

export { DefaultSelect };
