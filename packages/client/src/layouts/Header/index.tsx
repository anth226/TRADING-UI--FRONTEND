import React, { FC, useCallback, useMemo } from 'react';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HeaderTab } from '@option-blitz/libs/components/common/HeaderTab';
import cx from 'classnames';
import Button from '@option-blitz/libs/components/inputs/Button';
import { HeaderUser } from '@option-blitz/libs/components/common/HeaderUser';
import { HeaderBalance, HeaderSelectItem } from '@option-blitz/libs/components/common/HeaderBalance';
import { Link } from 'react-router-dom';
import { HeaderTabSelect, HeaderTabSelectChange } from '@option-blitz/libs/components/inputs/HeaderTabSelect';
import styles from './styles.module.scss';
import { Routes } from '../../constants/routes';
import { HeaderTabItem } from '../../hooks/header/useHeaderHandlers';

interface Props {
  onAddTab: () => void
  onBalanceChange: () => void
  options: HeaderSelectItem[]
  defaultOption: HeaderSelectItem
  isAuth: boolean
  tabs: HeaderTabItem[]
  userAvatarIsActive: boolean
  address: string
  onTabClick: (id: number) => void
  isMobile?: boolean
  openMobileNavigation?: () => void
}

const Header: FC<Props> = ({
  onAddTab,
  onBalanceChange,
  options,
  defaultOption,
  isAuth,
  tabs,
  userAvatarIsActive,
  address,
  onTabClick,
  isMobile,
  openMobileNavigation,
}) => {
  const tabChangeHandler = useCallback<HeaderTabSelectChange>((value) => {
    if (!value) return;
    onTabClick(value.id);
  }, []);
  
  const activeTab = useMemo(() => tabs.find((tab) => tab.isActive), [tabs]);

  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        <button onClick={isMobile ? openMobileNavigation : undefined}>
          <FontIcon
            name={FontIconName.Menu}
            size={20}
            className={styles.icon}
          />
        </button>
        {!isMobile && (
          <Link className={styles.logo} to={Routes.Homepage}>
            Option
            <span className={styles.logo_blitz}>Blitz</span>
          </Link>
        )}
        {!isMobile && (
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <HeaderTab
                key={tab.id}
                data={tab}
                className={styles.tab}
                onClick={onTabClick}
              />
            ))}
          </div>
        )}
        {isMobile && (
          <HeaderTabSelect
            className={styles.tab_selector}
            onChange={tabChangeHandler}
            tabs={tabs}
            defaultValue={activeTab}
            value={activeTab}
          />
        )}
        <button
          onClick={onAddTab}
          className={cx(styles.tab, styles.plus)}
        >
          <FontIcon size={16} className={styles.plus_icon} name={FontIconName.Plus} />
        </button>
      </div>

      <div className={styles.section}>
        <HeaderUser
          isActive={userAvatarIsActive} 
          className={styles.avatar}
          img="/avatar.png"
        />
        {isAuth && (
          <div className={styles.balance}>
            <HeaderBalance
              onChange={onBalanceChange}
              options={options}
              defaultValue={defaultOption}
            />
          </div>
        )}
        {!isMobile && (
          <Button size={32} color="orange" className={styles.login}>
            {address || 'login'}
          </Button>
        )}
      </div>
    </div>
  );
};

export { Header };
