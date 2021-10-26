import React, { FC } from 'react';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HeaderTab } from '@option-blitz/libs/components/common/HeaderTab';
import cx from 'classnames';
import { ProductType } from '@option-blitz/libs/constants/product';
import { Countries } from '@option-blitz/libs/constants/countries';
import Button from '@option-blitz/libs/components/inputs/Button';
import { HeaderUser } from '@option-blitz/libs/components/common/HeaderUser';
import { HeaderBalance } from '@option-blitz/libs/components/common/HeaderBalance';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { useHeaderHandlers } from '../../hooks/header/useHeaderHandlers';
import { Routes } from '../../constants/routes';

export interface HeaderTabItem {
  productType: ProductType
  countries: Countries
  value: string
  interest: string
  isActive?: boolean
}

const Header: FC = () => {
  const {
    onAddTab,
    onBalanceChange,
    options,
    defaultOption,
    isAuth,
    tabs,
    userAvatarIsActive,
    balance,
  } = useHeaderHandlers();
  
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <FontIcon
          name={FontIconName.Menu}
          size={20}
          className={styles.icon}
        />
        <Link className={styles.logo} to={Routes.Homepage}>
          Option
          <span className={styles.logo_blitz}>Blitz</span>
        </Link>
        <div className={styles.tabs}>
          {tabs.map(({
            productType,
            countries,
            value,
            interest,
            isActive,
          }) => (
            <HeaderTab
              key={value}
              className={styles.tab}
              productType={productType}
              countries={countries}
              value={value}
              interest={interest}
              isActive={isActive}
            />
          ))}
          <button onClick={onAddTab} className={cx(styles.tab, styles.plus)}>
            <FontIcon size={16} className={styles.plus_icon} name={FontIconName.Plus} />
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <HeaderUser isActive={userAvatarIsActive} className={styles.avatar} img="/avatar.png" />
        {isAuth && (
          <HeaderBalance
            onChange={onBalanceChange}
            options={options}
            className={styles.balance}
            defaultValue={defaultOption}
          />
        )}
        <Button size={32} color="orange" className={styles.login}>
          {balance || 'login'}
        </Button>
      </div>
    </div>
  );
};

export { Header };
