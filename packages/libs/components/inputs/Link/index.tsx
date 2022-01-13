import React, { useCallback } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

type Props = {
  to: string;
  className?: string;
};

const Link:React.FC<Props> = ({ 
  to, 
  className, 
  children,
}) => {
  const onMouseDown = useCallback((e) => e.stopPropagation(), []);

  return (
    <NavLink to={to} className={cx(styles.link, className)} onMouseDown={onMouseDown}>
      {children}
    </NavLink>
  );
};

export default Link;
