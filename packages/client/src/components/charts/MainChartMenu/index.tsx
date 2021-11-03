import React, { FC, useCallback } from 'react';
import cx from 'classnames';
import Tippy from '@tippyjs/react';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { ChartMenuIndicator, ChartMenuTime, MainChartTimeFormat } from '../../../hooks/mainChart/useChartMenuHandlers';
import styles from './styles.module.scss';

interface Props {
  className?: string
  indicators: ChartMenuIndicator[]
  times: ChartMenuTime[]
  onTimeClick: (format: MainChartTimeFormat, func: (date: Date) => Date) => void
  activeTime?: MainChartTimeFormat
  onZoomIn?: () => void
  onZoomOut?: () => void
  onChangeCharType?: () => void
  onIndicatorChecked: (indicator: ChartMenuIndicator) => void
}

const MainChartMenu: FC<Props> = ({
  className,
  indicators,
  times,
  onTimeClick,
  activeTime,
  onZoomIn,
  onZoomOut,
  onChangeCharType,
  onIndicatorChecked,
}) => {
  const timeClickHandler = 
    useCallback((format: MainChartTimeFormat, func: (date: Date) => Date) => () => {
      onTimeClick(format, func);
    }, [onTimeClick]);
  
  const checkboxHandler = useCallback((indicator: ChartMenuIndicator) => () => {
    onIndicatorChecked(indicator);
  }, [onIndicatorChecked]);
  
  return (
    <div className={cx(styles.wrap, className)}>
      <button
        className={styles.button}
        onClick={onZoomIn}
      >
        <FontIcon size={12} name={FontIconName.Info} />
      </button>
      <div className={styles.divider} />

      <button
        onClick={onZoomOut}
        className={styles.button}
      >
        <FontIcon size={12} name={FontIconName.Info} />
      </button>
      <div className={styles.divider} />

      {times.map((time) => (
        <React.Fragment key={time.label}>
          <button
            className={cx(
              styles.button, 
              { [styles.active_button]: time.format === activeTime },
            )}
            onClick={timeClickHandler(time.format, time.calc)}
          >
            {time.label}
          </button>
          <div className={styles.divider} />
        </React.Fragment>
      ))}

      <button onClick={onChangeCharType} className={styles.button}>
        <FontIcon size={12} name={FontIconName.Info} />
      </button>
      <div className={styles.divider} />

      <Tippy
        allowHTML
        trigger="click"
        placement="right-end"
        hideOnClick="toggle"
        className={styles.dropdown}
        content={(
          <div className={styles.dropdown_wrap}>
            {indicators?.map((indicator) => (
              <div key={indicator.label} className={styles.checkbox_wrap}>
                <Checkbox
                  size={15}
                  checked={indicator.checked}
                  onCheck={checkboxHandler(indicator)}
                />
                <p className={styles.checkbox_label}>{indicator.label}</p>
              </div>
            ))}
          </div>
      )}
      >
        <button className={styles.button}>
          <FontIcon size={12} name={FontIconName.Info} />
        </button>
      </Tippy>

    </div>
  );
};

export { MainChartMenu };
