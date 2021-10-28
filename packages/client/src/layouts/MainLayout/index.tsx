import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { Header } from '../Header';
import { LeftNavigationBar } from '../LeftNavigationBar';
import { RightSidebar } from '../../containers/rightSidebar/RightSidebar';

interface IProps {}

const MainLayout: FC<IProps> = ({ children }) => (
  <div
    className={cx(
      styles.container,
    )}
  >
    <Header />
    <div className={styles.body}>
      <LeftNavigationBar />
      {children}
      <RightSidebar />
    </div>
  </div>
);

export { MainLayout };
