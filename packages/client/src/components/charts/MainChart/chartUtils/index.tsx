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
  SingleValueTooltip,
  RSITooltip,
  StochasticTooltip,
  MovingAverageTooltip,
  BollingerBandTooltip,
  MACDTooltip,
} from 'react-financial-charts';
import { format, timeFormat } from 'd3';
import styles from '../styles.module.scss';

import { margin } from '../index';
import {
  ChartMenuIndicator, ChartType, fullSTO, IndicatorType, rsi14, bb, macdCalculator,
} from '../../../../hooks/mainChart/useChartMenuHandlers';

export const getGrid = (height = 500, width = 500, isLast = false) => {
  const gridWidth = width - margin.left - margin.right;

  return (
    <>
      <XAxis
        fontSize={8}
        axisAt="bottom"
        orient="bottom"
        innerTickSize={-1 * height}
        tickStrokeDasharray="Solid"
        domainClassName={styles.grid}
        tickStrokeStyle="rgba(102, 112, 148, 0.2)"
        tickLabelFill={isLast ? 'rgba(102, 112, 148, 0.2)' : 'transparent'}
        strokeStyle="transparent"
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

const macdAppearance = {
  strokeStyle: {
    macd: '#FF0000',
    signal: '#00F300',
  },
  fillStyle: {
    divergence: '#4682B4',
  },
};

const stochasticAppearance = {
  stroke: {
    dLine: StochasticSeries.defaultProps.strokeStyle.dLine,
    kLine: StochasticSeries.defaultProps.strokeStyle.kLine,
  },
};

export const indicatorTooltip = ({ type, value, tooltipLabel }: ChartMenuIndicator) => {
  const origin: [number, number] = [40, 10];
  switch (type) {
    case IndicatorType.MACD:
      return (
        <MACDTooltip
          origin={origin}
          yAccessor={value.accessor()}
          options={macdCalculator.options()}
          appearance={macdAppearance}
        />
      );
    case IndicatorType.ForseIndex:
      return (
        <SingleValueTooltip
          yAccessor={value.accessor()}
          yLabel={tooltipLabel || ''}
          xDisplayFormat={format('.3s')}
          yDisplayFormat={format('.3s')}
          origin={origin}
          valueFill="#667094"
        />
      );
    case IndicatorType.Stochastic:
      return (
        <StochasticTooltip
          origin={origin}
          yAccessor={value.accessor()}
          options={fullSTO.options()}
          label={tooltipLabel}
          appearance={stochasticAppearance}
          labelFill={value.stroke()}
        />
      );
    case IndicatorType.RSI:
      return (
        <RSITooltip
          origin={origin}
          options={rsi14.options()}
          yAccessor={value.accessor()}
          textFill={value.stroke()}
        />
      );
    default:
      return (
        <SingleValueTooltip
          yAccessor={value.accessor()}
          yLabel={tooltipLabel || ''}
          yDisplayFormat={format('.2f')}
          origin={origin}
          valueFill={value.stroke()}
        />
      );
  }
};

export const mainChartIndicatorTooltip = ({ type, value, tooltipLabel }: ChartMenuIndicator) => {
  switch (type) {
    case IndicatorType.BollingerBar:
      return (
        <BollingerBandTooltip
          origin={[150, 12]}
          yAccessor={value.accessor()}
          options={bb.options()}
          textFill="#667094"
        />
      );
    case IndicatorType.SAR:
      return (
        <SingleValueTooltip
          yLabel={tooltipLabel || ''}
          yAccessor={value.accessor()}
          origin={[40, 12]}
          valueFill="#667094"
        />
      );
    default:
      return null;
  }
};

export const movingAverageTooltip = (activeIndicators: ChartMenuIndicator[]) => {
  const options = activeIndicators
    .filter(({ movingTooltip }) => !!movingTooltip)
    .map(({ value, label, windowSize }) => (
      {
        yAccessor: value.accessor(),
        type: label,
        stroke: value.stroke(),
        windowSize: windowSize || 20,
      }
    ));
  return (
    <MovingAverageTooltip textFill="#667094" origin={[40, 15]} options={options} />
  );
};
