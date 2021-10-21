import React, { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import useResize from '../../../hooks/useResize';

interface Props {
  measure: () => void; // measure function, needed for measurement
}

const ChatMessage: FC<Props> = ({ children, measure }) => {
  useEffect(() => measure(), [measure]);
  useResize(measure);

  return (
    <div className={styles.message}>{children}</div>
  );
};

export { ChatMessage };
