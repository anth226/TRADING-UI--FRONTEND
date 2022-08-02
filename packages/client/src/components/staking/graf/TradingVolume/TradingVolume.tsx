/* eslint-disable */
import React, { FC } from 'react';
import {
  AreaSeries,
  Chart,
  ChartCanvas,
  CrossHairCursor, XAxis,
  YAxis,
} from 'react-financial-charts';

import styles from './styles.module.scss';
import {
  getMouseCoordinates,
} from '../../../../components/charts/MainChart/chartUtils/index';
import { useChartMenuHandlers } from '../../../../hooks/mainChart/useChartMenuHandlers';
import { useMainChart } from '../../../../hooks/mainChart/useMainChart';

export const margin = {
  left: 50, right: 0, top: 10, bottom: 30,
};
const marginBetweenCharts = 10;

interface Props {
  height?: number
  width?: number
  isMobile?: boolean
}

const TradingVolume: FC<Props> = ({
                                   width = 700,
                                   height = 400,
                                   children,
                                 }) => {
  const {
    chartType,
    activeIndicators,
  } = useChartMenuHandlers();

  const {
    calculatedData,
    newChartIndicators,
    mainChartIsLast,
    data,
    xAccessor,
    xExtents,
    xScale,
    displayXAccessor,
    ref,
  } = useMainChart(activeIndicators, chartType);


  const mainChartHeight = height  - margin.top - margin.bottom;
  if (!calculatedData) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>30 DAYS TRADING VOLUME</div>
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
        <Chart
          height={mainChartHeight}
          id={0}
          yExtents={(d) => d.close}

        >
          {/* {getGrid(mainChartHeight, width, mainChartIsLast)} */}
          {getMouseCoordinates(mainChartIsLast)}
          <AreaSeries
            yAccessor={(d) => d.close}
            fillStyle={(context) => {
              const gradient = context.createLinearGradient(0, 200, 0, 800);
              gradient.addColorStop(0, 'rgba(2,253,167,0.4)');
              gradient.addColorStop(1, 'rgba(0, 205, 134, 0)');
              return gradient;
            }}
            strokeWidth={2}
            strokeStyle="#00CD86"

          />
          <YAxis
            fontSize={10}
            axisAt="left"
            orient="left"
            innerTickSize={-1 * 800}
            tickStrokeDasharray="Solid"

            strokeStyle="transport"
            tickLabelFill="rgba(102, 112, 148, 1)"
            tickStrokeStyle="rgba(102, 112, 148, 0.2)"
          />
          <XAxis
            fontSize={10}
            axisAt="bottom"
            orient="bottom"
            innerTickSize={-1 * height}
            tickStrokeStyle="rgba(102, 112, 148, 0.0)"
            tickLabelFill="rgba(102, 112, 148, 1)"
            strokeStyle="transparent"
          />
          {children}
        </Chart>

        {newChartIndicators.map((indicator, index) => (
          <Chart
            key={indicator.type}
            id={indicator.type}
            yExtents={indicator.value.accessor()}
            height={indicator.height - marginBetweenCharts}
            origin={(w, h) => [0, h - (indicator.offset || indicator.height) + marginBetweenCharts]}
          >
            {/* {index === 0 && ( */}
            {/*   <XAxis */}
            {/*     axisAt="bottom" */}
            {/*     orient="bottom" */}
            {/*     fontSize={10} */}
            {/*     tickStrokeStyle="rgba(102, 112, 148, 0.2)" */}
            {/*     tickLabelFill="rgba(102, 112, 148, 1)" */}
            {/*     strokeStyle="transport" */}
            {/*   /> */}
            {/* )} */}
            {/* <YAxis */}
            {/*   axisAt="right" */}
            {/*   orient="right" */}
            {/*   fontSize={10} */}
            {/*   tickStrokeStyle="rgba(102, 112, 148, 0.2)" */}
            {/*   tickLabelFill="rgba(102, 112, 148, 1)" */}
            {/*   strokeStyle="transport" */}
            {/*   tickFormat={format('.3s')} */}
            {/* /> */}
          </Chart>
        ))}
        <CrossHairCursor />
      </ChartCanvas>
    </div>
  );
};

export { TradingVolume };

