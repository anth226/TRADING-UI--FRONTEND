import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: any;
  title?: string;
  image?: any;
  description?: string;
}

const NewsCard: FC<Props> = ({
  icon,
  title,
  description,
  image,
}) => (
  <>
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
        <div className={styles.title}>
          {title}
          <div className={styles.minutes}>34 minute ago</div>
        </div>
      </div>
      <div className={styles.img}>{image}</div>
      <div className={styles.descriptions}>{description}</div>
      <div className={styles.readMore}>Read more</div>
    </div>
  </>
);

export { NewsCard };
