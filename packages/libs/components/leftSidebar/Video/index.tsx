import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: any;
  title?: string;
  
}

const VideoCard: FC<Props> = ({
  icon,
  title,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.icon}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  </>
);

export { VideoCard };
