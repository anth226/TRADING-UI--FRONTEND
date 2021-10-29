import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '../../inputs/FontIcon';

export enum ViewMode {
  Grid = 'grid',
  Column = 'column',
}

interface Props {
  mode: ViewMode
  modeSelect: (value: ViewMode) => void
}

const MobileViewMode:FC<Props> = ({ mode, modeSelect }) => {
  const gridBtnHandler = useCallback(() => {
    modeSelect(ViewMode.Grid);
  }, [modeSelect]);
  
  const columnBtnHandler = useCallback(() => {
    modeSelect(ViewMode.Column);
  }, [modeSelect]);
  
  return (
    <div className={styles.wrap}>
      <button
        onClick={gridBtnHandler}
        className={cx(
          styles.btn, 
          styles.gird_btn,
          { [styles.active]: mode === ViewMode.Grid },
        )}
      >
        <FontIcon size={15} name={FontIconName.Grid} />
      </button>
      <button
        onClick={columnBtnHandler}
        className={cx(
          styles.btn,
          styles.gird_btn,
          { [styles.active]: mode === ViewMode.Column },
        )}
      >
        <FontIcon size={15} name={FontIconName.Menu} />
      </button>
    </div>
  );
};

export { MobileViewMode };
