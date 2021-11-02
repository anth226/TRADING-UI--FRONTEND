import React from 'react';
import {
  AreaSeries,
  CandlestickSeries,
  KagiSeries,
  LineSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  OHLCSeries,
  RenkoSeries,
  SARSeries,
  XAxis,
  YAxis,
  BollingerSeries,
} from 'react-financial-charts';
import { format, timeFormat } from 'd3';
import {
  ema12, sma20, tma20, wma20, 
} from '../../../../hooks/mainChart/useMainChart';
import styles from '../styles.module.scss';

import { margin } from '../index';
import { ChartMenuIndicator, ChartType, IndicatorType } from '../../../../hooks/mainChart/useChartMenuHandlers';

export const getGrid = (height = 500, width = 500) => {
  const gridHeight = height - margin.top - margin.bottom;
  const gridWidth = width - margin.left - margin.right;

  return (
    <>
      <XAxis
        fontSize={8}
        axisAt="bottom"
        orient="bottom"
        innerTickSize={-1 * gridHeight}
        tickStrokeDasharray="Solid"
        domainClassName={styles.grid}
        tickStrokeStyle="rgba(102, 112, 148, 0.2)"
        tickLabelFill="rgba(102, 112, 148, 0.2)"
        strokeStyle="transport"
      />
      <YAxis
        fontSize={8}
        axisAt="right"
        orient="right"
        innerTickSize={-1 * gridWidth}
        tickStrokeDasharray="Solid"
        domainClassName={styles.grid}
        strokeStyle="transport"
        tickLabelFill="rgba(102, 112, 148, 0.2)"
        tickStrokeStyle="rgba(102, 112, 148, 0.2)"
      />
    </>
  );
};

export const getMouseCoordinates = () => (
  <>
    <MouseCoordinateX
      at="bottom"
      orient="bottom"
      displayFormat={timeFormat('%Y-%m-%d')}
    />
    <MouseCoordinateY
      at="right"
      orient="right"
      fontSize={10}
      displayFormat={format('.3s')}
    />
  </>
);

export const chartTypeContainer = (activeChart: ChartType) => (
  <>
    {activeChart === ChartType.Area && (
      <AreaSeries yAccessor={(d) => d.close} />
    )}
    {activeChart === ChartType.Line && (
      <LineSeries yAccessor={(d) => d.close} />
    )}
    {activeChart === ChartType.CandleStick && <CandlestickSeries />}
    {activeChart === ChartType.Ohlc && <OHLCSeries />}
    {activeChart === ChartType.Kagi && <KagiSeries />}
    {activeChart === ChartType.Renko && <RenkoSeries />}
  </>
);

const bbStyles = {
  middle: '#009CCD',
  top: '#009CCD',
  bottom: '#009CCD',
};

export const mainChartIndicators = (activeIndicators: ChartMenuIndicator[]) => (
  <>
    {activeIndicators.map(({ type }) => (
      <React.Fragment key={type}>
        {type === IndicatorType.EMA && (
          <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
        )}
        {type === IndicatorType.SMA && (
          <LineSeries yAccessor={sma20.accessor()} strokeStyle={sma20.stroke()} />
        )}
        {type === IndicatorType.TMA && (
          <LineSeries yAccessor={tma20.accessor()} strokeStyle={tma20.stroke()} />
        )}
        {type === IndicatorType.WMA && (
          <LineSeries yAccessor={wma20.accessor()} strokeStyle={wma20.stroke()} />
        )}
        {type === IndicatorType.SAR && (
          <SARSeries yAccessor={(d) => d.sar} />
        )}
        {type === IndicatorType.BollingerBar && (
          <BollingerSeries
            yAccessor={(d) => d.bb}
            strokeStyle={bbStyles}
          />
        )}
      </React.Fragment>
    ))}
  </>
);
