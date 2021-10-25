import React, { FC } from 'react';
import Select, {
  OnChangeValue, SingleValueProps, components, OptionProps,
} from 'react-select';
import { getCustomStyles } from '../../../constants/select';
import styles from './styles.module.scss';
import { timeOptionsMock } from '../../../mock/rightSidebar/timeSelectOption';

export interface Time {
  value: string
}

interface Props {
  onChange?: (e: OnChangeValue<Time, false>) => void
  className?: string
}

const customStyles = getCustomStyles<Time>();

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

const SingleValue = (singleValueProps: SingleValueProps<Time, false>) => {
  const {
    data,
  } = singleValueProps;

  return (
    <components.SingleValue {...singleValueProps}>
      <div>
        <p className={styles.label}>Expiry</p>
        <span className={styles.value}>{data.value}</span>
      </div>
    </components.SingleValue>
  );
};

const Option = (optionProps: OptionProps<Time, false>) => {
  const { data } = optionProps;

  return (
    <components.Option {...optionProps}>
      <p>{data.value}</p>
    </components.Option>
  );
};

const RightSidebarTime: FC<Props> = ({
  onChange,
  className,
}) => (
  <div>
    <Select<Time, false>
      className={className}
      onChange={onChange}
      options={timeOptionsMock}
      defaultValue={timeOptionsMock[0]}
      styles={customStyles}
      components={{ Option, SingleValue }}
      isSearchable={false}
    />
  </div>
);

export { RightSidebarTime };
