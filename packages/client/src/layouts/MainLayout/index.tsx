import React, { FC } from 'react';
import cx from 'classnames';
import { HeaderContainer } from 'containers/HeaderContainer';
import useResize from '@option-blitz/libs/hooks/useResize';
import styles from './styles.module.scss';
import { LeftNavigationBar } from '../LeftNavigationBar';
import { RightSidebar } from '../../containers/rightSidebar/RightSidebar';
import { LeftSidebar } from '../../containers/leftSidebar/LeftSidebar';
import { useLeftNavigationBarHandlers } from '../../hooks/leftSidebar/useLeftNavigationBarHandlers';
import { MobileProducts } from '../../containers/MobileProducts';
import { MobileNavigationBar } from '../MobileNavigationBar';

interface IProps {}

const MainLayout: FC<IProps> = ({ children }) => {
  const {
    rootItems,
    activeRootItem,
    activeNavItem,
    setActiveRootType,
    setActiveNavItem,
    closeSidebar,
    mobileNavigationActive,
    toggleMobileNavigation,
  } = useLeftNavigationBarHandlers();
  
  const { isMobile } = useResize();
  
  return (
    <div
      className={cx(
        styles.container,
      )}
    >
      <HeaderContainer />
      <div className={styles.body}>
        {!isMobile && (
          <>
            <LeftNavigationBar
              rootItems={rootItems}
              activeRootItem={activeRootItem}
              setActiveNavItem={setActiveNavItem}
              setActiveRootType={setActiveRootType}
              activeNavItem={activeNavItem}
            />
            <LeftSidebar activeNavigation={activeNavItem} onBack={closeSidebar} />
            <RightSidebar />
          </>
        )}
        {isMobile && (
          <>
            <MobileProducts />
            <MobileNavigationBar
              onClose={toggleMobileNavigation}
              isOpen={mobileNavigationActive}
              rootItems={rootItems}
              activeRootItem={activeRootItem}
              setActiveNavItem={setActiveNavItem}
              setActiveRootType={setActiveRootType}
              activeNavItem={activeNavItem}
            />
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export { MainLayout };
