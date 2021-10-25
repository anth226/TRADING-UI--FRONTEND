import React, {
  ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren, 
} from 'react';
import cx from 'classnames';
import Loader from '../Loader';
import styles from './styles.module.scss';

export type ButtonColor = 'primary' | 'secondary' | 'orange';

export type ButtonProps = DetailedHTMLProps<
ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
> & {
  color?: ButtonColor,
  size?: number,
  fullWidth?: boolean,
  onClick?: (event: React.MouseEvent) => void,
  iconClassName?: string,
  isLoading?: boolean,
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  color = 'primary',
  size,
  fullWidth = false,
  onClick = () => {},
  className,
  type = 'button',
  children,
  disabled,
  iconClassName,
  isLoading,
  ...rest
}) => (
  <button
    type={type}
    className={cx(
      styles.button,
      styles[color],
      className,
      {
        [styles.full_width]: fullWidth,
      },
    )}
    style={{ height: size }}
    onClick={onClick}
    disabled={disabled || isLoading}
    {...rest}
  >
    {isLoading ? <Loader /> : (
      <>
        {children}
      </>
    )}
  </button>
);

export default Button;
