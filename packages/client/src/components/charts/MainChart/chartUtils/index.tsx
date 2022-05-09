/* eslint-disable */

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
  MACDTooltip, Annotate,
} from 'react-financial-charts';
import { format, timeFormat } from 'd3';
import styles from '../styles.module.scss';

import { margin } from '../index';
import {
  ChartMenuIndicator, ChartType, fullSTO, IndicatorType, rsi14, bb, macdCalculator,
} from '../../../../hooks/mainChart/useChartMenuHandlers';
import { UserMark } from '../UserMark';
import { TimeMark, TimeMarkType } from '../TimeMark';

export const getGrid = (height = 500, width = 500, isLast = false) => {
  const gridWidth = width - margin.left - margin.right;
  const macdLineWith = gridWidth - 100

  return (
    <>
      <XAxis
        fontSize={10}
        axisAt="bottom"
        orient="bottom"
        innerTickSize={-1 * height}
        tickStrokeDasharray="Solid"
        domainClassName={styles.grid}
        tickStrokeStyle="rgba(102, 112, 148, 0.2)"
        tickLabelFill={isLast ? 'rgba(102, 112, 148, 1)' : 'transparent'}
        strokeStyle="transparent"
      />
      <YAxis
        fontSize={10}
        axisAt="right"
        orient="right"
        innerTickSize={-1 * gridWidth}
        tickStrokeDasharray="Solid"
        domainClassName={styles.grid}
        strokeStyle="transport"
        tickLabelFill="rgba(102, 112, 148, 1)"
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
        displayFormat={timeFormat('%Y-%m-%d %H:%M:%S')}
      />
    )}
    <MouseCoordinateY
      arrowWidth={10}
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
        <>
          <foreignObject x="0" y="-10" width="96%" height="100" style={{ paddingBottom: '1px' }} >
            <div style={{ borderTop: '1px solid #7B85A7'}}>
              <g className={styles.nod}>
                <svg width="50" height="25" viewBox="0 0 39 14"  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_7640_91625)">
                    <path d="M1.36873 13.5H29.3239C30.4152 13.5 31.4155 12.8917 31.9175 11.9228L37.836 0.5H0.500309V12.6316C0.500309 13.1112 0.889114 13.5 1.36873 13.5Z" stroke="#7B85A7"/>
                    <text fill="white" fontFamily="Cabin" fontSize={8.5} x={4} y={10} >MACD</text>
                  </g>
                  <defs>
                    <filter id="filter0_b_7640_91625" x="-13.6842" y="-13.6842" width="66.0266" height="41.3684" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feGaussianBlur in="BackgroundImage" stdDeviation="6.84211"/>
                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7640_91625"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7640_91625" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </g>

            </div>
          </foreignObject>
          <MACDSeries
            yAccessor={value.accessor()}
            fillStyle={{ divergence: 'rgba(123,133,167,1)' }}
            clip={false}
            strokeStyle={
              {
                macd: 'rgba(255,255,255,0)',
                signal: 'rgba(255,255,255,0)',
                zero: 'rgba(0,0,0,0)',
              }
            }
          />
        </>
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
      <AreaSeries
        yAccessor={(d) => d.close}
        fillStyle={(context) => {
          const gradient = context.createLinearGradient(0, 300, 0, 700);
          gradient.addColorStop(0, 'rgba(18, 97, 190, 0.31)');
          gradient.addColorStop(1, 'rgba(18, 45, 184, 0)');
          return gradient;
        }}
        strokeWidth={2}
        strokeStyle="#009CCD"
      />

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
    macd: 'rgba(255,255,255,0)',
    signal: 'rgba(255,255,255,0)',
  },
  fillStyle: {
    divergence: '#ffffff',
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
          key={type}
          origin={[150, 12]}
          yAccessor={value.accessor()}
          options={bb.options()}
          textFill="#667094"
        />
      );
    case IndicatorType.SAR:
      return (
        <SingleValueTooltip
          key={type}
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

export const getUserMarks = (data: any[], isActive = false) => {
  if (!isActive) return null;
  
  return (
    <>
      <Annotate
        when={(d) => d.date === data[data.length - 75].date}
        with={UserMark}
      />
      <Annotate
        when={(d) => d.date === data[data.length - 125].date}
        with={UserMark}
      />
    </>
  );
};

export const getTimeMarks = (data: any[], height: number) => (
  <>
    <Annotate
      when={(d) => d.date === data[data.length - 1].date}
      with={TimeMark}
      usingProps={{ height, type: TimeMarkType.End }}
    />
    <Annotate
      when={(d) => d.date === data[data.length - 60].date}
      with={TimeMark}
      usingProps={{ height, type: TimeMarkType.Start }}
    />
  </>
);
