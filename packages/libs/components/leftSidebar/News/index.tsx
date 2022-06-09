import React, { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  icon?: any;
  title?: string;
  image?: any;
  description?: string;
  isMobile?: boolean;
}

const NewsCard: FC<Props> = ({
  icon,
  title,
  description,
  image,
  isMobile,
}) => (
  <>
    <div className={isMobile ? styles.container_mob : styles.container}>
      <div className={isMobile ? styles.icon_mob : styles.icon}>
        {icon}
        <div className={isMobile ? styles.title_mob : styles.title}>
          {title}
          <div className={isMobile ? styles.minutes_mob : styles.minutes}>
            34 minute ago
          </div>
        </div>
      </div>
      <div className={isMobile ? styles.img_mob : styles.img}>{image}</div>
      <div className={isMobile ? styles.descriptions_mob : styles.descriptions}>
        {description}
      </div>
      <div className={isMobile ? styles.readMore_mob : styles.readMore}>Read more</div>
    </div>
  </>
);

export { NewsCard };
