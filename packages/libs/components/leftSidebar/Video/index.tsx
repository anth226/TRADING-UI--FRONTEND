/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: any;
  title?: string;
  isMobile?: boolean
  
}

const VideoCard: FC<Props> = ({
  icon,
  title,
  isMobile,
}) => (
  <>
    <div className={ isMobile? styles.containerMobile : styles.container}>
      <div className={isMobile ? styles.mainMobile : styles.main}>
        <div className={styles.icon}>{icon}</div>
        <div className={ isMobile ? styles.titleMobile : styles.title}>{title}</div>
      </div>
    </div>
  </>
);

export { VideoCard };
