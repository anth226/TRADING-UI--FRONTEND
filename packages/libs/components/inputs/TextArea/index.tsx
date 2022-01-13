import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { useAutosize } from '../../../hooks/ui/useAutosize';
import { TextInputWrap } from '../TextInputWrap';
import styles from './styles.module.scss';

interface IProps
  extends DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
  > {
  autoSize?: boolean;
  hasError?: boolean;
  value?: string;
}

const TextArea: FC<IProps> = ({
  autoSize,
  hasError,
  value,
  onChange,
  ...props
}) => {
  const ref = useAutosize(!!autoSize);

  return (
    <TextInputWrap className={styles.wrapper}>
      <textarea
        {...props}
        ref={ref}
        maxLength={props.maxLength}
        value={value}
        onChange={onChange}
      />

      {!!props.maxLength && (
        <div className={styles.limit}>
          {`${value?.toString().length} / ${props.maxLength}`}
        </div>
      )}
    </TextInputWrap>
  );
};

export { TextArea };
