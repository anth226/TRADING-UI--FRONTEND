import React, { FC } from 'react';
import classNames from 'classnames';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';
import styles from './styles.module.scss';

interface Props
  extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  size?: number
}

const CloseIcon: FC<Props> = ({
  size = 12,
  ...props
}) => (
  <button {...props} className={classNames(styles.close, props.className)} type="button">
    <FontIcon name={FontIconName.Close} size={size} />
  </button>
);

export { CloseIcon };
