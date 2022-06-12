/* eslint-disable */
import React, { FC, useCallback } from 'react';
import { Collapse } from '@option-blitz/libs/components/common/Collapse';
import ReactDOM from 'react-dom';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import cx from 'classnames';
import Link from '@option-blitz/libs/components/inputs/Link';
import { CloseIcon } from '@option-blitz/libs/components/common/CloseIcon';
import styles from './styles.module.scss';
import { NavigationBarProps } from '../LeftNavigationBar';
import { Navigation } from '../../constants/navigation/navigation';
import { Routes } from '../../constants/routes';

interface Props extends NavigationBarProps{
  onClose?: () => void
  className?: string
  isOpen?: boolean
}

const MobileNavigationBar: FC<Props> = ({
  rootItems,
  activeNavItem,
  setActiveNavItem,
  onClose,
  isOpen,
}) => {
  const navigationClickHandler = useCallback((type?: Navigation) => () => {
    setActiveNavItem(type);
  }, []);

  return (
    ReactDOM.createPortal((
      <div className={cx(styles.wrap, { [styles.is_open]: isOpen })}>
        <CloseIcon size={20} className={styles.close} onClick={onClose} />

        {rootItems.map((root) => (
          <React.Fragment key={root.type}>
            <Collapse
              contentClassName={styles.collapse_content}
              titleClassName={styles.collapse_title} 
              className={styles.collapse}
              isActive
              title={root.name}
            >
              {root.items.map((item) => (
                <button
                  key={item.type}
                  onClick={navigationClickHandler(item.type)}
                  className={cx(
                    styles.button,
                    { [styles.button_active]: item.type === activeNavItem },
                  )}
                >
                  <FontIcon className={styles.icon} size={20} name={item.icon} />
                  <p>{item.name}</p>
                </button>
              ))}
            </Collapse>
            <div className={styles.divider} />
          </React.Fragment>
          
        ))}

        <div className={styles.section} >
          <div onClick={() => { setActiveNavItem(Navigation.Info); }} className={styles.link}>
            <FontIcon className={styles.icon} size={20} name={FontIconName.Info} />
            <p className={styles.ling_text}>Info</p>
          </div>
          <Link className={styles.link} to={Routes.Homepage}>
            <FontIcon className={styles.icon} size={20} name={FontIconName.Settings} />
            <p className={styles.ling_text}>Settings</p>
          </Link>
          <Link className={styles.link} to={Routes.Homepage}>
            <FontIcon className={styles.icon} size={20} name={FontIconName.Logout} />
            <p className={styles.ling_text}>Logout</p>
          </Link>
        </div>
      </div>
    ), document.body)
  );
};

export { MobileNavigationBar };
