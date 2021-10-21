import React, { FC } from 'react';
import classNames from 'classnames';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';
import styles from './styles.module.scss';

interface Props {
  onClick?: () => void
  className?: string
}

const CloseIcon: FC<Props> = ({ ...props }) => (
  <button {...props} className={classNames(styles.close, props.className)} type="button">
    <FontIcon name={FontIconName.Close} size={12} />
  </button>
);

export { CloseIcon };
