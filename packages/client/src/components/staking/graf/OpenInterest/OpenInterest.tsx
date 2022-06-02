/* eslint-disable */
import React, { FC } from 'react';
import {
  Chart,
  ChartCanvas,
  CrossHairCursor, YAxis,
} from 'react-financial-charts';
import styles from './styles.module.scss';
import {
  chartTypeContainer,
  getGrid,
  getMouseCoordinates,
  mainChartIndicators,

  movingAverageTooltip,
} from '../../../../components/charts/MainChart/chartUtils/index';

import { useChartMenuHandlers } from '../../../../hooks/mainChart/useChartMenuHandlers';

import { useMainChart } from '../../../../hooks/mainChart/useMainChart';
import { format } from 'd3';


export const margin = {
  left: 0, right: 50, top: 10, bottom: 30,
};
export const paddingTB = {
  left: 0, right: 0, top: 40, bottom: 0,
};


interface Props {
  height?: number
  width?: number
  isMobile?: boolean
}

const OpenInterest: FC<Props> = ({
                                width = 400,
                                height = 500,
                              }) => {
  const {
    chartType,
    activeIndicators,
  } = useChartMenuHandlers();
  console.log({ activeIndicators });

  const {
    calculatedData,
    indicatorsHeight,
    mainChartIsLast,
    data,
    xAccessor,
    xExtents,
    xScale,
    displayXAccessor,
    ref,
  } = useMainChart(activeIndicators, chartType);


  const mainChartHeight = height - indicatorsHeight - margin.top - margin.bottom;
  if (!calculatedData) {
    return null;
  }


  return (
    <div className={styles.wrap}>

      <div>OPEN INTEREST</div>
      <ChartCanvas
        ref={ref}
        height={height}
        width={width}
        ratio={1}
        flipXScale={true}
        disableZoom={true}
        margin={margin}
        seriesName="MSFT"
        data={data}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        xExtents={xExtents}

      >
        <Chart
          height={mainChartHeight}
          id={0}
          yExtents={(d) => [d.high, d.low]}
          padding={paddingTB}
        >
          {getGrid(mainChartHeight, width, mainChartIsLast)}
          {getMouseCoordinates(mainChartIsLast)}
          {chartTypeContainer(chartType)}
          {mainChartIndicators(activeIndicators.filter((i) => !i.isNewChart))}
          {movingAverageTooltip(activeIndicators)}
          <YAxis
            axisAt="left"
            orient="left"
            fontSize={10}
            tickStrokeStyle="rgba(102, 112, 148, 0.2)"
            tickLabelFill="rgba(102, 112, 148, 1)"
            strokeStyle="transport"
            tickFormat={format('.3s')}
          />
        </Chart>
        <CrossHairCursor />
      </ChartCanvas>
    </div>
  );
};

export { OpenInterest };
