import React, { FC, useCallback } from 'react';
import Select, {
  OnChangeValue, SingleValueProps, components, OptionProps,
} from 'react-select';
import cx from 'classnames';
import styles from './styles.module.scss';
import { getCustomStyles } from '../../../constants/select';
import { Time } from '../../rightSidebar/RightSidebarTime';

export interface OptionItem {
  value: string
  label?: string
}

type SizeType = 'normal' | 'small';

interface Props {
  options?: OptionItem[]
  defaultValue?: OptionItem
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
  type?: SizeType,
  title?: string
}

const customStyles = getCustomStyles<OptionItem>();

customStyles.indicatorSeparator = () => ({ display: 'none' });
customStyles.valueContainer = (provided) => ({
  ...provided,
  padding: 6,
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

const DefaultSelect: FC<Props> = ({
  onChange,
  className,
  options,
  defaultValue,
  title,
  type = 'normal',
}) => {
  const SingleValue = useCallback((singleValueProps: SingleValueProps<Time, false>) => {
    const {
      data,
    } = singleValueProps;
    const isSmall = type === 'small';

    return (
      <components.SingleValue {...singleValueProps}>
        <div className={cx(
          styles.wrap,
          { [styles.wrap_small]: isSmall },
          { [styles.wrap_without_title]: !title?.length && isSmall },
        )}
        >
          {title && (
            <p className={cx(
              styles.label,
              { [styles.label_small]: isSmall },
            )}
            >
              {title}
            </p>
          )}
          <span className={cx(
            styles.value,
            { [styles.value_small]: isSmall },
          )}
          >
            {data.value}
          </span>
        </div>
      </components.SingleValue>
    );
  }, [title, type]);

  return (
    <Select<Time, false>
      className={className}
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      styles={customStyles}
      components={{ Option, SingleValue }}
      isSearchable={false}
    />
  );
};

export { DefaultSelect };
