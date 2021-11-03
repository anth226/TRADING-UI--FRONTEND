import React, { FC } from 'react';
import {
  Chart,
  ChartCanvas,
  CrossHairCursor,
  discontinuousTimeScaleProvider,
  OHLCTooltip, XAxis, YAxis,
  ZoomButtons,
} from 'react-financial-charts';
import { last } from 'ramda';
import { format } from 'd3';
import styles from './styles.module.scss';
import {
  chartTypeContainer, getGrid, getMouseCoordinates, mainChartIndicators, getIndicatorSeries,
} from './chartUtils';
import { MainChartMenu } from '../MainChartMenu';
import { useChartMenuHandlers } from '../../../hooks/mainChart/useChartMenuHandlers';
import { useMainChart } from '../../../hooks/mainChart/useMainChart';

export const margin = {
  left: 0, right: 50, top: 10, bottom: 30,
};

const xScaleProvider = discontinuousTimeScaleProvider
  .inputDateAccessor((d) => d.date);

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
    indicatorsHeight,
    newChartIndicators,
    mainChartIsLast,
  } = useChartMenuHandlers();

  const mainChartHeight = height - indicatorsHeight - margin.top - margin.bottom;

  const {
    calculatedData,
  } = useMainChart(activeIndicators);

  if (!calculatedData) {
    return null;
  }

  const {
    data,
    xScale,
    xAccessor,
    displayXAccessor,
  } = xScaleProvider(calculatedData);

  console.log(data, activeIndicators);

  const start = xAccessor(last(data));
  const end = xAccessor(data[Math.max(0, data.length - 150)]);
  const xExtents = [start, end];
  
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
        className={styles.menu}
        indicators={indicators}
        times={times}
        onTimeClick={timeClick}
        onChangeCharType={changeChartType}
        onIndicatorChecked={onCheckIndicator}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
      />
    </div>
  );
};

export { MainChart };
