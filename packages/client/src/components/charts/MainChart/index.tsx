import React, { FC, useCallback } from 'react';
import {
  Chart,
  ChartCanvas,
  CrossHairCursor,
  OHLCTooltip,
  XAxis,
  YAxis,
  ZoomButtons,
  EdgeIndicator,
} from 'react-financial-charts';
import { format } from 'd3';
import styles from './styles.module.scss';
import {
  chartTypeContainer,
  getGrid,
  getIndicatorSeries,
  getMouseCoordinates, getTimeMarks, getUserMarks,
  indicatorTooltip,
  mainChartIndicators,
  mainChartIndicatorTooltip,
  movingAverageTooltip,
} from './chartUtils';
import { MainChartMenu } from '../MainChartMenu';
import { MainChartTimeFormat, useChartMenuHandlers } from '../../../hooks/mainChart/useChartMenuHandlers';
import { useMainChart } from '../../../hooks/mainChart/useMainChart';

export const margin = {
  left: 0, right: 50, top: 10, bottom: 30,
};

const marginBetweenCharts = 10;

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
    toggleUserMarks,
    userMarksActive,
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
    ref,
  } = useMainChart(activeIndicators);

  const timeClickHandler = useCallback(
    (tFormat: MainChartTimeFormat, calc: (date: Date) => Date) => {
      timeClick(tFormat);
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
        ref={ref}
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
          {movingAverageTooltip(activeIndicators)}
          {activeIndicators.map((i) => (mainChartIndicatorTooltip(i)))}

          <OHLCTooltip origin={[40, 0]} textFill="#667094" />
          <EdgeIndicator
            itemType="last"
            orient="right"
            edgeAt="right"
            yAccessor={(d) => d.close}
            fill="#009CCD"
            lineStroke="#fff"
          />
          <g className={styles.zoom_buttons}>
            <ZoomButtons heightFromBase={0} strokeWidth={0} fillOpacity={0.1} />
          </g>

          {/* TODO: Delete marks after implementing backend */}
          {getTimeMarks(data, height)}
          {getUserMarks(data, userMarksActive)}
        </Chart>

        {newChartIndicators.map((indicator, index) => (
          <Chart
            key={indicator.type}
            id={indicator.type}
            yExtents={indicator.value.accessor()}
            height={indicator.height - marginBetweenCharts}
            origin={(w, h) => [0, h - (indicator.offset || indicator.height) + marginBetweenCharts]}
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
            {indicatorTooltip(indicator)}
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
        toggleUserMark={toggleUserMarks}
        userMarksIsActive={userMarksActive}
      />
    </div>
  );
};

export { MainChart };
