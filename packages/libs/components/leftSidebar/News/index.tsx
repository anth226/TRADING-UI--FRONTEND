/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import forex from '../../../../libs/assets/images/f.svg'

interface Props {
  icon?: any;
  title?: string;
  image?: any;
  description?: string;
  isMobile?: boolean;
  link?:string;
  publicData?:string;
}

const NewsCard: FC<Props> = ({
                               icon,
                               title,
                               description,
                               image,
                               isMobile,
                               link,
                               publicData,
                             }) => (
  <>
    <div className={isMobile ? styles.container_mob : styles.container}>
      <div className={isMobile ? styles.icon_mob : styles.icon}>
        {icon}<img src={forex} alt='icon' />
        <div className={isMobile ? styles.title_mob : styles.title}>
          {title}
          <div className={isMobile ? styles.minutes_mob : styles.minutes}>
            {publicData}
          </div>
        </div>
      </div>
      <div className={isMobile ? styles.img_mob : styles.img}><img  className={styles.img} src={image} alt='' /></div>
      <div className={isMobile ? styles.descriptions_mob : styles.descriptions}>
        {description}
      </div>
      <div className={isMobile ? styles.readMore_mob : styles.readMore}><a href={link}>Read more</a></div>
    </div>
  </>
);

export { NewsCard };
