import React, {
  FC, HTMLProps, useCallback, useState, 
} from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../FontIcon';
import { TextInputWrap } from '../TextInputWrap';

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  left?: JSX.Element | string;
  right?: JSX.Element | string;
  error?: boolean;
  hasError?: boolean;
}

const IconRenderer: FC<{ error?: boolean }> = ({ children, error }) =>
  (children ? (
    <div
      className={classNames(styles.icon, {
        [styles.text]: typeof children === 'string',
        [styles.error]: error,
      })}
    >
      {children}
    </div>
  ) : null);

const TextInput: FC<TextInputProps> = ({
  type = 'text',
  left,
  right,
  hasError,
  className,
  ...props
}) => {
  const [revealed, setRevealed] = useState(false);
  const toggleRevealed = useCallback(() => setRevealed(!revealed), [
    setRevealed,
    revealed,
  ]);

  return (
    <TextInputWrap error={hasError}>
      <IconRenderer error={hasError}>{left}</IconRenderer>

      { /* @ts-ignore */}
      <input
        type={revealed ? 'text' : type}
        {...props}
        className={classNames(styles.input, className)}
        size={1}
      />

      <IconRenderer>{right}</IconRenderer>

      {type === 'password' && (
        <IconRenderer>
          <button className={styles.reveal} onClick={toggleRevealed} type="button">
            <FontIcon name={FontIconName.View} size={16} />
          </button>
        </IconRenderer>
      )}
    </TextInputWrap>
  );
};

export { TextInput };
