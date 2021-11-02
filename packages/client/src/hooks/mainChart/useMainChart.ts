import {
  bollingerBand, discontinuousTimeScaleProvider, ema, sar, sma, tma, wma,
} from 'react-financial-charts';
import { useEffect, useMemo, useState } from 'react';
import * as d3 from 'd3';
import { last } from 'ramda';
import { ChartMenuIndicator, IndicatorType } from './useChartMenuHandlers';

/*eslint-disable */
export const ema12 = ema()
  .id(1)
  .options({ windowSize: 12 })
  .merge((d: any, c: any) => { d.ema12 = c; })
  .accessor((d: any) => d.ema12);

export const sma20 = sma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.sma20 = c; })
  .accessor((d: any) => d.sma20);

export const tma20 = tma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.tma20 = c; })
  .accessor((d: any) => d.tma20);

export const wma20 = wma()
  .options({ windowSize: 20 })
  .merge((d: any, c: any) => { d.wma20 = c; })
  .accessor((d: any) => d.wma20);

const defaultSar = sar()
  .options({
    accelerationFactor: 0.02, maxAccelerationFactor: 0.2
  })
  .merge((d: any, c: any) => {d.sar = c;})
  .accessor((d: any) => d.sar);

const bb = bollingerBand()
  .merge((d: any, c: any) => {d.bb = c;})
  .accessor((d: any) => d.bb);

/* eslint-enable */

const link = 'https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv';
const parseDate = d3.timeParse('%Y-%m-%d');

export const useMainChart = (indicators: ChartMenuIndicator[]) => {
  const [initialData, setData] = useState<any>();
  useEffect(() => {
    d3.tsv(link, (e: any) => {
      e.date = parseDate(e.date);
      e.open = +e.open;
      e.high = +e.high;
      e.low = +e.low;
      e.close = +e.close;
      e.volume = +e.volume;
      return e;
    }).then((value) => {
      console.log(value);
      setData(value);
    });
  }, []);

  const calculatedData = useMemo(() => {
    if (!initialData) return undefined;

    let data = initialData;
    
    indicators.forEach(({ type }) => {
      if (type === IndicatorType.EMA) data = ema12(data); 
      if (type === IndicatorType.SMA) data = sma20(data);
      if (type === IndicatorType.TMA) data = tma20(data);
      if (type === IndicatorType.WMA) data = wma20(data);
      if (type === IndicatorType.SAR) data = defaultSar(data);
      if (type === IndicatorType.BollingerBar) data = bb(data);
    });

    return data;
  }, [indicators, initialData]);
  
  return { calculatedData };
};
