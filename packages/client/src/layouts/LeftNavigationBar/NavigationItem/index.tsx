import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import styles from '../styles.module.scss';
import { Navigation } from '../../../constants/navigation/navigation';

interface Props {
  type?: Navigation
  activeType?: string
  setType?: (value: Navigation) => void
}

const NavigationItem: FC<Props> = ({
  children, setType, type, activeType,
}) => {
  const clickHandler = useCallback(() => {
    if (!type) return;
    if (setType) setType(type);
  }, [setType, type]);

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
