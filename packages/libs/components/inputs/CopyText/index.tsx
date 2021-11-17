import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { FontIcon, FontIconName } from '../FontIcon';
import styles from './styles.module.scss';
import { TextInput, TextInputProps } from '../TextInput';

type Props = TextInputProps & {
  onCopy?: () => void;
};

export const CopyText: React.FC<Props> = ({ onCopy, ...props }) => (
  <TextInput
    {...props}
    right={(
      <CopyToClipboard text={props.value?.toString() || ''} onCopy={onCopy}>
        <button type="button" className={styles.button} disabled={props.disabled}>
          <FontIcon name={FontIconName.Copy} size={16} />
        </button>
      </CopyToClipboard>
  )}
  />
);
