import React, { FC, useCallback } from 'react';
import {
  Chart,
  ChartCanvas,
  CrossHairCursor,
  OHLCTooltip, XAxis, YAxis,
  ZoomButtons,
} from 'react-financial-charts';
import { format } from 'd3';
import styles from './styles.module.scss';
import {
  chartTypeContainer, getGrid, getMouseCoordinates, mainChartIndicators, getIndicatorSeries,
} from './chartUtils';
import { MainChartMenu } from '../MainChartMenu';
import { MainChartTimeFormat, useChartMenuHandlers } from '../../../hooks/mainChart/useChartMenuHandlers';
import { useMainChart } from '../../../hooks/mainChart/useMainChart';

export const margin = {
  left: 0, right: 50, top: 10, bottom: 30,
};

interface Props {
  height?: number
  width?: number
}

const MainChart: FC<Props> = ({
  width = 800,
  height = 500,
}) => {
  const {
    onCheckIndicator,
    times,
    indicators,
    changeChartType,
    timeClick,
    chartType,
    zoomIn,
    zoomOut,
    activeIndicators,
    activeTime,
  } = useChartMenuHandlers();

  const {
    calculatedData,
    indicatorsHeight,
    newChartIndicators,
    mainChartIsLast,
    data,
    xAccessor,
    xExtents,
    xScale,
    displayXAccessor,
    setTime,
  } = useMainChart(activeIndicators);
  
  const timeClickHandler = useCallback(
    (timeFormat: MainChartTimeFormat, calc: (date: Date) => Date) => {
      timeClick(timeFormat);
      setTime(calc);
    }, [setTime, timeClick],
  );

  const mainChartHeight = height - indicatorsHeight - margin.top - margin.bottom;

  if (!calculatedData) {
    return null;
  }
  
  return (
    <div className={styles.wrap}>
      <ChartCanvas
        height={height}
        width={width}
        ratio={1}
        margin={margin}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >
        <Chart height={mainChartHeight} id={0} yExtents={(d) => [d.high, d.low]}>
          {getGrid(mainChartHeight, width, mainChartIsLast)}
          {getMouseCoordinates(mainChartIsLast)}
          {chartTypeContainer(chartType)}
          {mainChartIndicators(activeIndicators.filter((i) => !i.isNewChart))}

          <OHLCTooltip origin={[40, 0]} textFill="#667094" />
          <g className={styles.zoom_buttons}>
            <ZoomButtons heightFromBase={0} strokeWidth={0} fillOpacity={0.1} />
          </g>
        </Chart>

        {newChartIndicators.map((indicator, index) => (
          <Chart
            key={indicator.type}
            id={indicator.type}
            yExtents={indicator.value.accessor()}
            height={indicator.height}
            origin={(w, h) => [0, h - (indicator.offset || indicator.height)]}
          >
            {index === 0 && (
              <XAxis
                axisAt="bottom"
                orient="bottom"
                fontSize={8}
                tickStrokeStyle="rgba(102, 112, 148, 0.2)"
                tickLabelFill="rgba(102, 112, 148, 0.2)"
                strokeStyle="transport"
              />
            )}
            <YAxis
              axisAt="right"
              orient="right"
              fontSize={8}
              tickStrokeStyle="rgba(102, 112, 148, 0.2)"
              tickLabelFill="rgba(102, 112, 148, 0.2)"
              strokeStyle="transport"
              tickFormat={format('.3s')}
            />

            {getMouseCoordinates(index === 0)}
            {getIndicatorSeries(indicator)}
          </Chart>
        ))}
        <CrossHairCursor />
      </ChartCanvas>

      <MainChartMenu
        activeTime={activeTime}
        className={styles.menu}
        indicators={indicators}
        times={times}
        onTimeClick={timeClickHandler}
        onChangeCharType={changeChartType}
        onIndicatorChecked={onCheckIndicator}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
      />
    </div>
  );
};

export { MainChart };
