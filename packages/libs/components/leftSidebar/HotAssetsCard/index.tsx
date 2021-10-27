import React, { FC, MouseEventHandler, useCallback } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import hotAssetsDiagram from '../../../assets/images/hot_assets_diagram.svg';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

interface Props {
  icon?: string
  title?: string
  firstValue?: string
  secondValue?: string
  className?: string
}

const HotAssetsCard: FC<Props> = ({
  icon,
  title,
  firstValue,
  secondValue,
  className,
}) => {
  const cardButton = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  
  return (
    <a onClick={cardButton} href="/" className={cx(styles.wrap, className)}>
      <div className={styles.title_wrap}>
        <div className={styles.coin_wrap}>
          <img src={icon} alt="coin" />
          <p className={styles.title}>{title}</p>
        </div>

        <div className={styles.info_wrap}>
          <p className={styles.first_value}>{firstValue}</p>
          <span className={styles.second_value}>{secondValue}</span>
        </div>
      </div>
      <img className={styles.diagram} src={hotAssetsDiagram} alt="diagram" />

      <button className={styles.button}>
        <FontIcon size={10} name={FontIconName.Plus} />
      </button>
    </a>
  );
};

export { HotAssetsCard };
