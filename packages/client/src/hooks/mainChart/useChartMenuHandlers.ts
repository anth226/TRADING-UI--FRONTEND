import { useCallback, useState } from 'react';
import {
  atr, bollingerBand, ema, sar, sma, tma, wma, rsi, macd, forceIndex, stochasticOscillator,
} from 'react-financial-charts';
import { addDays, addHours, addMinutes } from 'date-fns';

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

export enum MainChartTimeFormat {
  Day30,
  Day1,
  Hours3,
  Horse1,
  Min30,
  Min15,
  Min5,
  Min1,
}

export const chartTypes: ChartType[] = [
  ChartType.Area, ChartType.Line,
  ChartType.CandleStick, ChartType.Ohlc, ChartType.Kagi, ChartType.Renko,
];

export interface ChartMenuTime {
  label: string
  calc: (date: Date) => Date
  format: MainChartTimeFormat
}

interface IndicatorValue {
  (data: any[], options?: {
    merge: boolean;
  }): any;
  accessor(): any;
  stroke(): string | any;
}

export interface ChartMenuIndicator {
  checked: boolean
  label: string
  type: IndicatorType
  height: number
  offset?: number
  value: IndicatorValue
  isNewChart?: boolean
  tooltipLabel?: string
  movingTooltip?: boolean
  windowSize?: number
}

const mainChartTimes: ChartMenuTime[] = [
  { label: '30 d', calc: ((date) => addDays(date, -30)), format: MainChartTimeFormat.Day30 },
  { label: '1 d', calc: ((date) => addDays(date, -1)), format: MainChartTimeFormat.Day1 },
  { label: '3 h', calc: ((date) => addHours(date, -3)), format: MainChartTimeFormat.Hours3 },
  { label: '1 h', calc: ((date) => addHours(date, -1)), format: MainChartTimeFormat.Horse1 },
  { label: '30 m', calc: ((date) => addMinutes(date, -30)), format: MainChartTimeFormat.Min30 },
  { label: '15 m', calc: ((date) => addMinutes(date, -15)), format: MainChartTimeFormat.Min15 },
  { label: '5 m', calc: ((date) => addMinutes(date, -5)), format: MainChartTimeFormat.Min5 },
  { label: '1 m', calc: ((date) => addMinutes(date, -1)), format: MainChartTimeFormat.Min1 },
];

/*eslint-disable */
const ema12 = ema()
  .id(1)
  .options({ windowSize: 12 })
  .merge((d: any, c: any) => { d.ema12 = c; })
  .accessor((d: any) => d.ema12);

const sma20 = sma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.sma20 = c; })
  .accessor((d: any) => d.sma20);

const tma20 = tma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.tma20 = c; })
  .accessor((d: any) => d.tma20);

const wma20 = wma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.wma20 = c; })
  .accessor((d: any) => d.wma20);

const defaultSar = sar()
  .options({
    accelerationFactor: 0.02, maxAccelerationFactor: 0.2
  })
  .merge((d: any, c: any) => {d.sar = c;})
  .accessor((d: any) => d.sar);

export const bb = bollingerBand()
  .merge((d: any, c: any) => {d.bb = c;})
  .accessor((d: any) => d.bb);

export const atr14 = atr()
  .options({ windowSize: 14 })
  .merge((d: any, c: any) => {d.atr14 = c;})
  .accessor((d: any) => d.atr14);

export const rsi14 = rsi()
  .options({ windowSize: 14 })
  .merge((d: any, c: any) => {d.rsi = c;})
  .accessor((d: any) => d.rsi);

export const macdCalculator = macd()
  .options({
    fast: 12,
    slow: 26,
    signal: 9,
  })
  .merge((d: any, c: any) => {d.macd = c;})
  .accessor((d: any) => d.macd);

const fi = forceIndex()
  .merge((d: any, c: any) => {d.fi = c;})
  .accessor((d: any) => d.fi);

export const fullSTO = stochasticOscillator()
  .options({ windowSize: 14, kWindowSize: 3, dWindowSize: 4 })
  .merge((d: any, c: any) => {d.fullSTO = c;})
  .accessor((d: any) => d.fullSTO);

/* eslint-enable */

const mainChartIndicators: ChartMenuIndicator[] = [
  {
    type: IndicatorType.EMA, label: 'EMA', checked: false, height: 0, value: ema12, movingTooltip: true, windowSize: 12,
  },
  {
    type: IndicatorType.SMA, label: 'SMA', checked: false, height: 0, value: sma20, movingTooltip: true, windowSize: 20,
  },
  {
    type: IndicatorType.TMA, label: 'TMA', checked: false, height: 0, value: tma20, movingTooltip: true, windowSize: 20,
  },
  {
    type: IndicatorType.WMA, label: 'WMA', checked: false, height: 0, value: wma20, movingTooltip: true, windowSize: 20,
  },
  {
    type: IndicatorType.SAR, 
    label: 'SAR',
    checked: false,
    height: 0,
    value: defaultSar,
    tooltipLabel: `SAR (${defaultSar.options().accelerationFactor}, ${defaultSar.options().maxAccelerationFactor})`,
  },
  {
    type: IndicatorType.BollingerBar, label: 'BOLLINGER BAR', checked: false, height: 0, value: bb,
  },
  {
    type: IndicatorType.MACD, label: 'MACD', checked: false, height: 125, value: macdCalculator, isNewChart: true,
  },
  {
    type: IndicatorType.ATR,
    label: 'ATR',
    checked: false,
    height: 125,
    value: atr14,
    isNewChart: true,
    tooltipLabel: `ATR (${atr14.options().windowSize})`,
  },
  {
    type: IndicatorType.RSI, label: 'RSI', checked: false, height: 125, value: rsi14, isNewChart: true,
  },
  {
    type: IndicatorType.Stochastic,
    label: 'STOCHASTIC',
    checked: false,
    height: 125,
    value: fullSTO,
    isNewChart: true,
    tooltipLabel: 'Full STO',
  },
  {
    type: IndicatorType.ForseIndex,
    label: 'FORCE INDEX',
    checked: false,
    height: 125,
    value: fi,
    isNewChart: true,
    tooltipLabel: 'ForceIndex (1)',
  },
];

export const useChartMenuHandlers = () => {
  const [activeTime, setActiveTime] = useState<MainChartTimeFormat>();
  const [indicators, setIndicators] = useState(mainChartIndicators);
  const [chartTypeNum, setChartTypeNum] = useState(0);
  const [zoomInElement, setZoomInElement] = useState<Element>();
  const [zoomOutElement, setZoomOutElement] = useState<Element>();
  const [userMarksActive, setUserMarks] = useState(false);
  
  const onCheckIndicator = useCallback((indicator: ChartMenuIndicator) => {
    const newIndicators = [...indicators];
    const currentIndicator = newIndicators.find((item) => item.label === indicator.label);
    if (!currentIndicator) return;
    
    currentIndicator.checked = !indicator.checked;

    let offset = 0;
    newIndicators
      .filter((i) => i.checked)
      .forEach((i) => {
        offset += i.height;
        // eslint-disable-next-line no-param-reassign
        i.offset = offset;
      });

    setIndicators(newIndicators);
  }, []);
  
  const timeClick = useCallback((format: MainChartTimeFormat) => {
    setActiveTime(format);
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
  
  const activeIndicators = indicators.filter((indicator) => indicator.checked);
  
  const toggleUserMarks = useCallback(() => {
    setUserMarks((prevState) => !prevState);
  }, []);

  return {
    onCheckIndicator,
    indicators,
    times: mainChartTimes,
    timeClick,
    changeChartType,
    chartType: chartTypes[chartTypeNum],
    zoomIn,
    zoomOut,
    activeIndicators,
    activeTime,
    userMarksActive,
    toggleUserMarks,
  };
};
