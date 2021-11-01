import React, { FC, MouseEventHandler, useCallback } from 'react';
import cx from 'classnames';
import { HeaderTabItem } from '@option-blitz/client/src/hooks/header/useHeaderHandlers';
import styles from './styles.module.scss';
import { CloseIcon } from '../CloseIcon';
import { countriesIcons, countriesNames } from '../../../constants/countries';
import { productTypeNames } from '../../../constants/product';

interface Props {
  data: HeaderTabItem
  onClose?: () => void
  onClick: (id: number) => void
  className?: string
}

const HeaderTab: FC<Props> = ({
  data,
  onClose,
  onClick,
  className,
}) => {
  const {
    id, productType, value, interest, isActive, countries,
  } = data;

  const closeHandler = useCallback<MouseEventHandler<HTMLButtonElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!onClose) return;
    onClose();
  }, [onClose]);
  
  const clickHandler = useCallback(() => {
    onClick(id);
  }, [id, onClick]);
  
  return (
    <div className={cx(
      styles.wrap, 
      className, 
      { [styles.bottom_indicator]: isActive },
    )}
    >
      <CloseIcon onClick={closeHandler} className={styles.close_icon} />
      <button onClick={clickHandler} className={styles.content}>
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
