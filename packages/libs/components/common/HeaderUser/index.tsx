import React, { FC, MouseEventHandler } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

export enum HeaderUserStatus {
  online = 'online',
}

interface Props {
  className?: string
  status?: HeaderUserStatus
  img?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  isActive?: boolean
}

const HeaderUser: FC<Props> = ({
  status = HeaderUserStatus.online,
  img,
  className,
  onClick,
  isActive = false,
}) => (
  <button
    onClick={onClick}
    className={cx(
      styles.wrap,
      { [styles.wrap_border]: !!img },
      { [styles.active_indicator]: isActive },
      className,
    )}
  >
    <div className={styles.avatar_wrap}>
      <div className={cx(
        styles.indicator,
        styles[status],
      )}
      />
      {img && (
        <img src={img} alt="avatar" />
      )}
      {!img && (
        <div className={cx(styles.avatar, styles.empty_avatar)} />
      )}
    </div>
  </button>
);

export { HeaderUser };
