import React, { FC, MouseEventHandler, useCallback } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import hotAssetsDiagram from '../../../assets/images/hot_assets_diagram.svg';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

type SizeType = 'normal' | 'small';

interface Props {
  icon?: string
  title?: string
  firstValue?: string
  secondValue?: string
  className?: string
  type?: SizeType
}

const WatchlistCard: FC<Props> = ({
  icon,
  title,
  firstValue,
  secondValue,
  className,
  type,
}) => {
  const isSmall = type === 'small';

  const cardButton = useCallback<MouseEventHandler<HTMLAnchorElement>>((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <>
      {!isSmall && (
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

          <button className={styles.buttonPlus}>
            <FontIcon size={12} name={FontIconName.Plus} />
          </button>

          <button className={styles.buttonMinus}>
            <FontIcon size={12} name={FontIconName.Close} />
          </button>

          <button className={styles.BinocularChecked}>
            <FontIcon size={12} name={FontIconName.Binocular} />
            <FontIcon size={12} name={FontIconName.Checked} />
          </button>

        </a>
      )}
      {isSmall && (
        <a onClick={cardButton} href="/" className={cx(styles.wrap_small, className)}>
          <img className={styles.diagram_small} src={hotAssetsDiagram} alt="diagram" />
          <div className={styles.title_wrap_small}>
            <p className={cx(styles.first_value, styles.first_value_small)}>{firstValue}</p>
            <div className={styles.icon_wrap_small}>
              <img src={icon} alt="coin" />
            </div>
            <span
              className={cx(styles.second_value, styles.second_value_small)}
            >
              {secondValue}
            </span>
            <p className={cx(styles.title, styles.title_small)}>{title}</p>
          </div>
          <button className={cx(styles.button, styles.button_small)}>
            <FontIcon size={10} name={FontIconName.Plus} />
          </button>
        </a>
      )}
    </>
  );
};

export { WatchlistCard };
