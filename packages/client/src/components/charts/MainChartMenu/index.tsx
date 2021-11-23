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
  userMarksIsActive?: boolean
  toggleUserMark?: () => void
  isMobile?: boolean
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
  toggleUserMark,
  userMarksIsActive,
  isMobile,
}) => {
  const timeClickHandler = 
    useCallback((format: MainChartTimeFormat, func: (date: Date) => Date) => () => {
      onTimeClick(format, func);
    }, [onTimeClick]);
  
  const checkboxHandler = useCallback((indicator: ChartMenuIndicator) => () => {
    onIndicatorChecked(indicator);
  }, [onIndicatorChecked]);
  
  return (
    <>
      {!isMobile && (
        <div className={cx(styles.wrap, className)}>
          <button
            className={styles.button}
            onClick={onZoomIn}
          >
            <FontIcon size={12} name={FontIconName.ZoomIn} />
          </button>
          <div className={styles.divider} />

          <button
            onClick={onZoomOut}
            className={styles.button}
          >
            <FontIcon size={12} name={FontIconName.ZoomOut} />
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

          <button
            onClick={toggleUserMark}
            className={cx(
              styles.button,
              { [styles.active_button]: userMarksIsActive },
            )}
          >
            <FontIcon size={12} name={FontIconName.AddUser} />
          </button>
          <div className={styles.divider} />

          <button onClick={onChangeCharType} className={styles.button}>
            <FontIcon size={12} name={FontIconName.ChartLine} />
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
              <FontIcon size={12} name={FontIconName.ChartBar} />
            </button>
          </Tippy>
        </div>
      )}
      
      {isMobile && (
        <>
          <div className={styles.mobile_wrap}>
            <button
              onClick={toggleUserMark}
              className={cx(
                styles.mobile_button,
                { [styles.active_button]: userMarksIsActive },
              )}
            >
              <FontIcon size={20} name={FontIconName.AddUser} />
            </button>
            <button onClick={onChangeCharType} className={styles.mobile_button}>
              <FontIcon size={20} name={FontIconName.ChartLine} />
            </button>

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
                        size={25}
                        checked={indicator.checked}
                        onCheck={checkboxHandler(indicator)}
                      />
                      <p className={styles.checkbox_label}>{indicator.label}</p>
                    </div>
                  ))}
                </div>
              )}
            >
              <button className={styles.mobile_button}>
                <FontIcon size={20} name={FontIconName.ChartBar} />
              </button>
            </Tippy>

            <div className={styles.mobile_zoom_wrap}>
              <button
                onClick={onZoomOut}
              >
                <FontIcon size={6} name={FontIconName.Minus} />
              </button>
              <FontIcon size={14} name={FontIconName.Search} />
              <button
                onClick={onZoomIn}
              >
                <FontIcon size={6} name={FontIconName.Plus} />
              </button>
            </div>
          </div>
          <div className={styles.times_container_mobile}>
            {times.map((time) => (
              <button
                key={time.label}
                className={cx(
                  styles.time_button_mobile,
                  { [styles.time_button_active_mobile]: time.format === activeTime },
                )}
                onClick={timeClickHandler(time.format, time.calc)}
              >
                {time.label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export { MainChartMenu };
