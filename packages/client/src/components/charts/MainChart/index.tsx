import React, { FC } from 'react';
import {
  ChartCanvas,
  Chart, ZoomButtons,
  CrossHairCursor,
  discontinuousTimeScaleProvider,
  OHLCTooltip,
} from 'react-financial-charts';
import { last } from 'ramda';
import styles from './styles.module.scss';
import {
  chartTypeContainer, getGrid, getMouseCoordinates, mainChartIndicators, 
} from './chartUtils';
import { MainChartMenu } from '../MainChartMenu';
import { useChartMenuHandlers } from '../../../hooks/mainChart/useChartMenuHandlers';
import { useMainChart } from '../../../hooks/mainChart/useMainChart';

export const margin = {
  left: 0, right: 50, top: 10, bottom: 30,
};

const xScaleProvider = discontinuousTimeScaleProvider
  .inputDateAccessor((d) => d.date);

const MainChart: FC = () => {
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
  } = useChartMenuHandlers();

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

  const start = xAccessor(last(data));
  const end = xAccessor(data[Math.max(0, data.length - 150)]);
  const xExtents = [start, end];
  
  return (
    <div className={styles.wrap}>
      <ChartCanvas
        height={500}
        width={800}
        ratio={1}
        margin={margin}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}
      >
        <Chart id={0} yExtents={(d) => [d.high, d.low]}>
          {getGrid(500, 800)}
          {getMouseCoordinates()}
          {chartTypeContainer(chartType)}
          {mainChartIndicators(activeIndicators)}

          <OHLCTooltip origin={[40, 0]} textFill="#667094" />
          <g className={styles.zoom_buttons}>
            <ZoomButtons heightFromBase={0} strokeWidth={0} fillOpacity={0.1} />
          </g>
        </Chart>

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
