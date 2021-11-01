import React, { FC, useCallback, useState } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

interface Props {
  title?: string | JSX.Element
  isActive?: boolean
  onClick?: () => void
  className?: string
  titleClassName?: string
  contentClassName?: string
}

const Collapse: FC<Props> = ({
  children,
  title,
  isActive,
  onClick,
  titleClassName,
  className,
  contentClassName,
}) => {
  const [localOpen, setLocalOpen] = useState(isActive);
  
  const clickHandler = useCallback(() => {
    if (onClick) {
      onClick();
    }
    setLocalOpen((prevState) => !prevState);
  }, [onClick]);
  
  const isOpened = onClick ? isActive : localOpen;
  
  return (
    <div className={cx(styles.wrap, className)}>
      <div className={styles.title_wrap}>
        {typeof title === 'string'
          ? <p className={titleClassName}>{title}</p>
          : title}
        <button 
          onClick={clickHandler}
          className={isOpened ? styles.arrow_top : styles.arrow_down}
        >
          <FontIcon size={10} name={FontIconName.ArrowRight} />
        </button>
      </div>
      {isOpened && (
        <div className={contentClassName}>
          {children}
        </div>
      )}
    </div>
  );
};

export { Collapse };
