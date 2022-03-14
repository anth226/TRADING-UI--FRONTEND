import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
  error?: boolean;
  label?: string;
}

const TextInputWrap: FC<IProps> = ({
  children, ref, className, error, label = 'label', ...props 
}) => (
  <div
    className={classNames(
      styles.wrap,
      className, { [styles.error]: error },
    )}
    ref={ref}
    {...props}
  >
    <span className={styles.label}>
      {label}
    </span>
    <div className={styles.containerInput}>
      {children}
    </div>
  </div>
);

export { TextInputWrap };
