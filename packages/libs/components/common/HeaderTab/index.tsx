import React, { FC, MouseEventHandler, useCallback } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { CloseIcon } from '../CloseIcon';
import { Countries, countriesIcons, countriesNames } from '../../../constants/countries';
import { ProductType, productTypeNames } from '../../../constants/product';

interface Props {
  productType: ProductType
  countries: Countries
  value: string
  interest: string
  isActive?: boolean
  onClose?: () => void
  onClick?: () => void
  className?: string
}

const HeaderTab: FC<Props> = ({
  productType,
  countries,
  value,
  interest,
  onClose,
  onClick,
  isActive = false,
  className,
}) => {
  const closeHandler = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onClose) return;
    onClose();
  }, [onClose]);
  
  return (
    <div className={cx(
      styles.wrap, 
      className, 
      { [styles.bottom_indicator]: isActive },
    )}
    >
      <button onClick={onClick} className={styles.content}>
        <CloseIcon onClick={closeHandler} className={styles.close_icon} />
        <img className={styles.countries_icon} src={countriesIcons[countries]} alt="country" />
        <div className={styles.info}>
          <p className={styles.title}>{countriesNames[countries]}</p>
          <p className={styles.value}>
            {value}
            &nbsp;
            <span className={styles.value_add}>{`+${interest}%`}</span>
          </p>
          <p className={styles.option}>{productTypeNames[productType]}</p>
        </div>
        <div className={styles.is_active} />
      </button>
    </div>
  );
};

export { HeaderTab };
