import React from 'react';
import {
  AreaSeries, BollingerSeries,
  CandlestickSeries,
  KagiSeries,
  LineSeries, MACDSeries,
  MouseCoordinateX,
  MouseCoordinateY,
  OHLCSeries,
  RenkoSeries, SARSeries, StochasticSeries,
  XAxis,
  YAxis,
  AlternatingFillAreaSeries,
  StraightLine,
} from 'react-financial-charts';
import { format, timeFormat } from 'd3';
import styles from '../styles.module.scss';

import { margin } from '../index';
import { ChartMenuIndicator, ChartType, IndicatorType } from '../../../../hooks/mainChart/useChartMenuHandlers';

export const getGrid = (height = 500, width = 500, isLast = false,) => {
  const gridHeight = height - margin.top - margin.bottom;
  const gridWidth = width - margin.left - margin.right;

  return (
    <>
      {isLast && (
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
      )}
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

export const getMouseCoordinates = (isLast = false) => (
  <>
    {isLast && (
      <MouseCoordinateX
        at="bottom"
        orient="bottom"
        displayFormat={timeFormat('%Y-%m-%d')}
      />
    )}
    <MouseCoordinateY
      at="right"
      orient="right"
      fontSize={10}
      displayFormat={format('.3s')}
    />
  </>
);

const bbStyles = {
  middle: '#009CCD',
  top: '#009CCD',
  bottom: '#009CCD',
};

export const getIndicatorSeries = ({ type, value }: ChartMenuIndicator) => {
  switch (type) {
    case IndicatorType.ForseIndex:
      return (
        <>
          <AlternatingFillAreaSeries
            baseAt={0}
            yAccessor={value.accessor()}
          />
          <StraightLine yValue={0} />
        </>
      );
    case IndicatorType.MACD:
      return (
        <MACDSeries
          yAccessor={value.accessor()}
        />
      );
    case IndicatorType.Stochastic:
      return (
        <StochasticSeries
          yAccessor={value.accessor()}
        />
      );
    case IndicatorType.BollingerBar:
      return (
        <BollingerSeries
          yAccessor={value.accessor()}
          strokeStyle={bbStyles}
        />
      );
    case IndicatorType.SAR:
      return (<SARSeries yAccessor={value.accessor()} />);
    default:
      return (
        <LineSeries yAccessor={value.accessor()} strokeStyle={value.stroke()} />
      );
  }
};

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

export const mainChartIndicators = (activeIndicators: ChartMenuIndicator[]) => (
  <>
    {activeIndicators.map((indicator) => (
      <React.Fragment key={indicator.type}>
        {getIndicatorSeries(indicator)}
      </React.Fragment>
    ))}
  </>
);
