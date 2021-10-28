import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';

interface Props {
  icon?: FontIconName,
  activeType?: string
  type: string
  setType: (val: string) => void
  iconSize?: number
  image?: string
}

const ExpandablePart: FC<Props> = ({
  icon,
  children,
  type,
  setType, 
  activeType,
  iconSize = 20,
  image,
}) => {
  const isActive = activeType === type;

  const clickHandler = useCallback(() => {
    if (type === activeType) {
      setType('');
      return;
    }
    setType(type);
  }, [setType, type, activeType]);
  return (
    <div className={cx(
      styles.expandable_wrap,
      { [styles.expandable_wrap_active]: isActive },
    )}
    >
      <button
        className={cx(
          styles.expandable_btn,
          { [styles.expandable_btn_active]: isActive },
        )}
        onClick={clickHandler}
      >
        {icon && <FontIcon size={iconSize} name={icon} />}
        {image && <img style={{ height: iconSize }} src={image} alt="icon" />}
        <FontIcon
          className={cx(
            styles.arrow,
            { [styles.not_active_arrow]: !isActive },
          )}
          size={8}
          name={FontIconName.SolidArrow}
        />
      </button>
      {isActive && (
        <div className={styles.expandable_content}>
          { children }
        </div>
      )}
    </div>
  );
};

export { ExpandablePart };
