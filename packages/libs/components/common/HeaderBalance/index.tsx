import React, {
  FC, MouseEventHandler, useCallback,
} from 'react';
import Select, {
  OptionProps,
  components,
  SingleValueProps,
  StylesConfig,
  Options,
  OnChangeValue,
} from 'react-select';
import styles from './styles.module.scss';
import { Coin } from '../../../constants/coin';

interface Props {
  onChange: (e: OnChangeValue<HeaderSelectItem, false>) => void
  options: Options<HeaderSelectItem>
  defaultValue?: HeaderSelectItem
  onClick?: () => void
  className?: string
}

export interface HeaderSelectItem {
  value: number
  coinValue: string
  coin: Coin
  title: string
}

const Option = (optionProps: OptionProps<HeaderSelectItem, false>) => {
  const { data } = optionProps;
  
  return (
    <components.Option {...optionProps}>
      <div className={styles.option_content}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.value}>
          {data.coinValue}
          &nbsp;
          <span className={styles.coin}>{data.coin}</span>
        </p>
      </div>
    </components.Option>
  );
};

const customStyles: StylesConfig<HeaderSelectItem> = {
  control: (provided) => ({
    ...provided,
    borderRadius: 4,
    border: '1px solid var(--color-grey)',
    backgroundColor: 'transparent',
    color: 'var(--color-text)',
    '&:hover': {},
    boxShadow: 'none',
    height: '100%',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(---color-text)',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 20px 0 10px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 4,
    border: '1px solid var(--color-grey)',
    backgroundColor: 'transparent',
    padding: 6,
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'var(---color-text)',
    backgroundColor: state.isSelected ? '#192235' : 'transparent',
    padding: '12px 18px',
    borderRadius: 4,
    '&:active': {
      backgroundColor: 'transparent',
    },
  }),
  indicatorSeparator: (provider) => ({
    ...provider,
    height: '100%',
    backgroundColor: 'var(--color-grey)',
    margin: 0,
  }),
  indicatorsContainer: (provider, state) => ({
    ...provider,
    borderBottom: state.selectProps.menuIsOpen ? '3px solid var(--color-green)' : '',
    borderRadius: '0 0 4px 0',
    '&:hover': {
      cursor: 'pointer',
    },
  }),
  container: (provider) => ({
    ...provider,
    height: '100%',
  }),
};

const HeaderBalance: FC<Props> = ({
  onChange, options, defaultValue, onClick, className,
}) => {
  const onClickHandler = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!onClick) return;
    onClick();
  }, [onClick]);
  
  const SingleValue = useCallback((singleValueProps: SingleValueProps<HeaderSelectItem, false>) => {
    const {
      data: { title, coin, coinValue },
    } = singleValueProps;

    return (
      <components.SingleValue {...singleValueProps}>
        <button onClick={onClickHandler} className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.value}>
            {coinValue}
            &nbsp;
            <span className={styles.coin}>{coin}</span>
          </p>
        </button>
      </components.SingleValue>
    );
  }, [onClickHandler]);
  
  return (
    <Select<HeaderSelectItem, false>
      className={className}
      defaultValue={defaultValue}
      options={options}
      onChange={onChange}
      openMenuOnClick={false}
      styles={customStyles}
      components={{ Option, SingleValue }}
      isSearchable={false}
    />
  );
};

export { HeaderBalance };
