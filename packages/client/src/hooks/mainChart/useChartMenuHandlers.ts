import { useCallback, useState } from 'react';

export enum ChartType {
  Area,
  Line,
  CandleStick,
  Ohlc,
  Kagi,
  Renko,
}

export enum IndicatorType {
  EMA,
  SMA,
  TMA,
  WMA,
  SAR,
  BollingerBar,
  MACD,
  ATR,
  RSI,
  Stochastic,
  ForseIndex,
}

export const chartTypes: ChartType[] = [
  ChartType.Area, ChartType.Line,
  ChartType.CandleStick, ChartType.Ohlc, ChartType.Kagi, ChartType.Renko,
];

export interface ChartMenuTime {
  label: string
  format: string
}

export interface ChartMenuIndicator {
  checked: boolean
  label: string
  type: IndicatorType
}

const mainChartTimes: ChartMenuTime[] = [
  { label: '30 d', format: '' },
  { label: '1 d', format: '' },
  { label: '3 h', format: '' },
  { label: '1 h', format: '' },
  { label: '30 m', format: '' },
  { label: '15 m', format: '' },
  { label: '5 m', format: '' },
  { label: '1 m', format: '' },
];

const mainChartIndicators: ChartMenuIndicator[] = [
  { type: IndicatorType.EMA, label: 'EMA', checked: false },
  { type: IndicatorType.SMA, label: 'SMA', checked: false },
  { type: IndicatorType.TMA, label: 'TMA', checked: false },
  { type: IndicatorType.WMA, label: 'WMA', checked: false },
  { type: IndicatorType.SAR, label: 'SAR', checked: false },
  { type: IndicatorType.BollingerBar, label: 'BOLLINGER BAR', checked: false },
  { type: IndicatorType.MACD, label: 'MACD', checked: false },
  { type: IndicatorType.ATR, label: 'ATR', checked: false },
  { type: IndicatorType.RSI, label: 'RSI', checked: false },
  { type: IndicatorType.Stochastic, label: 'STOCHASTIC', checked: false },
  { type: IndicatorType.ForseIndex, label: 'FORCE INDEX', checked: false },
];

export const useChartMenuHandlers = () => {
  const [indicators, setIndicators] = useState(mainChartIndicators);
  const [chartTypeNum, setChartTypeNum] = useState(0);
  const [zoomInElement, setZoomInElement] = useState<Element>();
  const [zoomOutElement, setZoomOutElement] = useState<Element>();
  
  const onCheckIndicator = useCallback((indicator: ChartMenuIndicator) => {
    const newIndicators = [...indicators];
    const currentIndicator = newIndicators.find((item) => item.label === indicator.label);
    if (!currentIndicator) return;
    currentIndicator.checked = !indicator.checked;
    setIndicators(newIndicators);
  }, []);
  
  const timeClick = useCallback(() => {
  }, []);

  const changeChartType = useCallback(() => {
    if (chartTypeNum === chartTypes.length - 1) {
      setChartTypeNum(0);
      return;
    }
    
    setChartTypeNum((prevState) => prevState + 1);
  }, [chartTypeNum]);
  
  const zoom = useCallback((element: Element) => {
    const evt = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      clientX: 20,
    });
    element.dispatchEvent(evt);
  }, []);

  const zoomIn = useCallback(() => {
    if (!zoomInElement) {
      const el = document.getElementsByClassName('in')[0];
      setZoomInElement(el);
      zoom(el);
      return;
    }
    zoom(zoomInElement);
  }, [zoomInElement]);
  
  const zoomOut = useCallback(() => {
    if (!zoomOutElement) {
      const el = document.getElementsByClassName('out')[0];
      setZoomOutElement(el);
      zoom(el);
      return;
    }
    zoom(zoomOutElement);
  }, [zoomOutElement]);

  return {
    onCheckIndicator,
    indicators,
    times: mainChartTimes,
    timeClick,
    changeChartType,
    chartType: chartTypes[chartTypeNum],
    zoomIn,
    zoomOut,
    activeIndicators: indicators.filter((indicator) => indicator.checked),
  };
};
