import React, { FC } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

interface Props {
  title?: string | JSX.Element
  isActive?: boolean
  onClick?: () => void
  className?: string
  titleClassName?: string
}

const Collapse: FC<Props> = ({
  children,
  title,
  isActive,
  onClick,
  titleClassName,
  className,
}) => (
  <div className={cx(styles.wrap, className)}>
    <div className={styles.title_wrap}>
      {typeof title === 'string' 
        ? <p className={titleClassName}>{title}</p>
        : title}
      <button onClick={onClick} className={isActive ? styles.arrow_top : styles.arrow_down}>
        <FontIcon size={10} name={FontIconName.ArrowRight} />
      </button>
    </div>
    {isActive && children}
  </div>
);

export { Collapse };
