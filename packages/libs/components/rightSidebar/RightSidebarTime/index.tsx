import React, { FC, useCallback } from 'react';
import Select, {
  OnChangeValue, SingleValueProps, components, OptionProps,
} from 'react-select';
import cx from 'classnames';
import { getCustomStyles } from '../../../constants/select';
import styles from './styles.module.scss';
import { timeOptionsMock } from '../../../mock/rightSidebar/timeSelectOption';

type Type = 'normal' | 'small';

export interface Time {
  value: string
}

interface Props {
  onChange?: (e: OnChangeValue<Time, false>) => void
  className?: string
  type?: Type
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
  type = 'normal',
}) => {
  const SingleValue = useCallback((singleValueProps: SingleValueProps<Time, false>) => {
    const {
      data,
    } = singleValueProps;

    return (
      <components.SingleValue {...singleValueProps}>
        <div className={type === 'small' ? styles.wrap_small : styles.wrap}>
          <p className={cx(
            styles.label, 
            { [styles.label_small]: type === 'small' },
          )}
          >
            Expiry
          </p>
          <span className={cx(
            styles.value,
            { [styles.value_small]: type === 'small' },
          )}
          >
            {data.value}
          </span>
        </div>
      </components.SingleValue>
    );
  }, [type]);
  
  return (
    <Select<Time, false>
      className={className}
      onChange={onChange}
      options={timeOptionsMock}
      defaultValue={timeOptionsMock[0]}
      styles={customStyles}
      components={{ Option, SingleValue }}
      isSearchable={false}
    />
  );
};

export { RightSidebarTime };
