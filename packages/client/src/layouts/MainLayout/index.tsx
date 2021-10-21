import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface IProps {}

const MainLayout: FC<IProps> = ({ children }) => (
  <div
    className={cx(
      styles.container,
    )}
  >
    {children}
  </div>
);

export { MainLayout };
