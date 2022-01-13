import React, {
  FC, MouseEventHandler, useCallback,
} from 'react';
import Select, {
  OptionProps,
  components,
  SingleValueProps,
  Options,
  OnChangeValue,
} from 'react-select';
import { getCustomStyles } from '../../../constants/select';
import styles from './styles.module.scss';
import { Coin, coinNames } from '../../../constants/coin';

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
        <p className={styles.option_title}>{data.title}</p>
        <p className={styles.value}>
          {data.coinValue}
          &nbsp;
          <span className={styles.coin}>{coinNames[data.coin]}</span>
        </p>
      </div>
    </components.Option>
  );
};

const customStyles = getCustomStyles<HeaderSelectItem>();

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
            <span className={styles.coin}>{coinNames[coin]}</span>
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
