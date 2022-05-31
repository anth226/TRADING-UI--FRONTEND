/* eslint-disable */
import React, { FC, useCallback, useMemo, useState } from 'react';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { HeaderTab } from '@option-blitz/libs/components/common/HeaderTab';
import cx from 'classnames';
import Button from '@option-blitz/libs/components/inputs/Button';
import { HeaderUser } from '@option-blitz/libs/components/common/HeaderUser';
import { HeaderBalance, HeaderSelectItem } from '@option-blitz/libs/components/common/HeaderBalance';
import { Link, useHistory } from 'react-router-dom';
import { HeaderTabSelect, HeaderTabSelectChange } from '@option-blitz/libs/components/inputs/HeaderTabSelect';
import styles from './styles.module.scss';
import { Routes } from '../../constants/routes';
import { HeaderTabItem } from '../../hooks/header/useHeaderHandlers';
import { LoginModal } from '../../containers/Modals/LoginModal';
import { LoginPrivatKey } from '../../containers/Modals/LoginPrivatKey';
import { WalletConnected } from '../../containers/Modals/WalletConnected';
import { CreateNewAccount } from '../../containers/Modals/CreateNewAccount';

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

  const [modalVisible, setModalVisible] = useState(false);
  const [ wallet, setWallet] =useState(false)
  const [privatkey, setPrivatkey]=useState(false)
  const [createaccount, setCreateaccount]=useState(false)

  const handleChange = () => {
    setModalVisible(true)
  }

  const history = useHistory();
  const handlerChange = () => {
    history.push('/profile');
  };
  const goToBalances = () => {
    history.push('/balances');
  };
  const goToSelection = () => {
    history.push('/selections');
  };

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
          onClick={goToSelection}
          className={cx(styles.tab, styles.plus)}
        >
          <FontIcon size={16} className={styles.plus_icon} name={FontIconName.Plus} />
        </button>
      </div>

      <div className={styles.section}>
        <HeaderUser
          onClick={handlerChange}
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
              onClick={goToBalances}
            />
          </div>
        )}
        {!isMobile && (
          <Button size={32} color='orange' className={styles.login} onClick={handleChange}>
            {address || 'login'}
          </Button>
        )}
        <LoginModal active={modalVisible} setActive={setModalVisible} setCreateaccount={setCreateaccount} setKey={setPrivatkey} isMobile={isMobile} />
        <LoginPrivatKey active={privatkey} setActive={setPrivatkey} mainmodal={setModalVisible} />
        <WalletConnected active={wallet} setActive={setWallet} />
        <CreateNewAccount active={createaccount} setActive={setCreateaccount} setWallet={setWallet} isMobile={isMobile} />
      </div>
    </div>
  );
};

export { Header };
