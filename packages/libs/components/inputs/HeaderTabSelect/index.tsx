import React, { FC } from 'react';
import Select, {
  components, OnChangeValue, OptionProps, SingleValueProps, 
} from 'react-select';
import { HeaderTabItem } from '@option-blitz/client/src/hooks/header/useHeaderHandlers';
import { productTypeNames } from '../../../constants/product';
import { getCustomStyles } from '../../../constants/select';
import styles from './styles.module.scss';
import { countriesIcons, countriesNames } from '../../../constants/countries';

export type HeaderTabSelectChange = (e: OnChangeValue<HeaderTabItem, false>) => void;

interface Props {
  className?: string
  onChange?: HeaderTabSelectChange
  tabs: HeaderTabItem[]
  defaultValue?: HeaderTabItem
}

const customStyles = getCustomStyles<HeaderTabItem>();

customStyles.indicatorsContainer = ((provided, state) => ({
  ...provided,
  borderBottom: state.selectProps.menuIsOpen ? '3px solid var(--color-green)' : '',
  borderRadius: '0 0 0 4px',
  '&:hover': {
    cursor: 'pointer',
  },
  flexDirection: 'row-reverse',
  height: '100%',
}));
customStyles.control = ((provided) => ({
  ...provided,
  flexDirection: 'row-reverse',
  borderRadius: 4,
  border: '1px solid var(--color-grey)',
  backgroundColor: 'transparent',
  color: 'var(--color-text)',
  '&:hover': {},
  boxShadow: 'none',
  height: '100%',
  minHeight: '34px',
}));

const Option = (optionProps: OptionProps<HeaderTabItem, false>) => {
  const { data: { productType, countries } } = optionProps;

  return (
    <components.Option {...optionProps}>
      <div className={styles.option_wrap}>
        <img className={styles.icon} src={countriesIcons[countries]} alt="Crypto Icon" />
        <div>
          <p className={styles.label}>{countriesNames[countries]}</p>
          <p className={styles.product}>{productTypeNames[productType]}</p>
        </div>
      </div>
    </components.Option>
  );
};

const SingleValue = (singleValueProps: SingleValueProps<HeaderTabItem, false>) => {
  const { data: { countries, productType } } = singleValueProps;
  
  return (
    <components.SingleValue {...singleValueProps}>
      <div className={styles.single_value_wrap}>
        <img className={styles.icon} src={countriesIcons[countries]} alt="Crypto Icon" />
        <div>
          <p className={styles.label}>{countriesNames[countries]}</p>
          <p className={styles.product}>{productTypeNames[productType]}</p>
        </div>
      </div>
    </components.SingleValue>
  );
};

const HeaderTabSelect: FC<Props> = ({
  className,
  onChange,
  tabs,
  defaultValue,
}) => (
  <Select<HeaderTabItem, false>
    className={className}
    onChange={onChange}
    options={tabs}
    defaultValue={defaultValue}
    styles={customStyles}
    components={{ Option, SingleValue }}
    isSearchable={false}
  />
);

export { HeaderTabSelect };
