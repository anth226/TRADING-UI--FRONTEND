import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';

interface Props {
  onClick?: () => void
  type: string
  activeType?: string
  setType?: (value: string) => void
}

const NavigationItem: FC<Props> = ({
  children, onClick, setType, type, activeType,
}) => {
  const clickHandler = useCallback(() => {
    if (setType) setType(type);
    if (onClick) onClick();
  }, [onClick, setType, type]);

  return (
    <button
      onClick={clickHandler}
      className={cx(
        styles.button,
        { [styles.button_active]: activeType === type },
      )}
    >
      {children}
    </button>
  );
};

export { NavigationItem };
