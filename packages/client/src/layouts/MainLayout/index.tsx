import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { LeftNavigationBar } from '../LeftNavigationBar';
import { RightSidebar } from '../../containers/rightSidebar/RightSidebar';
import { LeftSidebar } from '../../containers/leftSidebar/LeftSidebar';
import { useLeftNavigationBarHandlers } from '../../hooks/leftSidebar/useLeftNavigationBarHandlers';

interface IProps {}

const MainLayout: FC<IProps> = ({ children }) => {
  const {
    rootItems,
    activeRootItem,
    activeNavItem,
    setActiveRootType,
    setActiveNavItem,
    closeSidebar,
  } = useLeftNavigationBarHandlers();
  
  return (
    <div
      className={cx(
        styles.container,
      )}
    >
      <Header />
      <div className={styles.body}>
        <LeftNavigationBar
          rootItems={rootItems}
          activeRootItem={activeRootItem}
          setActiveNavItem={setActiveNavItem}
          setActiveRootType={setActiveRootType}
          activeNavItem={activeNavItem}
        />
        <LeftSidebar activeNavigation={activeNavItem} onBack={closeSidebar} />
        {children}
        <RightSidebar />
      </div>
    </div>
  );
};

export { MainLayout };
