import {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { timeParse, csv } from 'd3';
import {
  discontinuousTimeScaleProvider, last, ChartCanvas, kagi, renko, elderRay, change,
} from 'react-financial-charts';
import { isBefore } from 'date-fns';
import { ChartMenuIndicator, ChartType } from './useChartMenuHandlers';
import { useOptionBlitz } from '../OptionBlitzProvider';

const link = 'https://raw.githubusercontent.com/rrag/react-stockcharts/master/docs/data/bitfinex_xbtusd_1m.csv';
// const link = 'https://raw.githubusercontent.com/rrag/react-stockcharts/master/docs/data/bitstamp_xbtusd_5m.csv';

const parseDate = timeParse('%Y-%m-%d %H:%M:%S');

const xScaleProvider = discontinuousTimeScaleProvider
  .inputDateAccessor((d) => d.date);

export const useMainChart = (activeIndicators: ChartMenuIndicator[], chartType: ChartType) => {
  const ref = useRef<ChartCanvas<number>>(null);
  const { priceFeed } = useOptionBlitz();
  const [initialData, setData] = useState<any>();
  useEffect(() => {
    //const crypto = priceFeed.subscribe("crypto",["BTC_USD", "XRP_USD"]).catch(e=>{});
    //const forex = priceFeed.subscribe("forex",["GBP_USD"]).catch(e=>{ console.log(e)});
    const listener = (data:any)=>{
      console.log(data);
    };
    //priceFeed?.on("GBP_USD", listener);
    //pricefeed?.on("BTC_USD", listener);
    return () => {
      priceFeed?.off("GBP_USD", listener);
    }

  },[]);
  useEffect(() => {
    csv(link, (e: any) => {
      e.date = parseDate(e.date);
      e.open = +e.open;
      e.high = +e.high;
      e.low = +e.low;
      e.close = +e.close;
      e.volume = +e.volume;
      return e;
    }).then((value) => {
      setData(value);
    });
  }, []);
  
  const calculateDataForChartType = useCallback((data: any) => {
    const kagiCalculator = kagi();
    const renkoCalculator = renko();
    const elderCalculator = elderRay();
    const changeCalculator = change();
    
    switch (chartType) {
      case ChartType.Kagi:
        return kagiCalculator(data);
      case ChartType.Renko:
        return renkoCalculator(data);
      case ChartType.Ohlc:
        return changeCalculator(elderCalculator(data));
      default:
        return data;
    }
  }, [chartType]);

  const calculatedData = useMemo(() => {
    if (!initialData) return undefined;

    let data = initialData;
    data = calculateDataForChartType(data);
    activeIndicators.forEach(({ value }) => {
      data = value(data);
    });

    return data;
  }, [activeIndicators, initialData, calculateDataForChartType]);

  const indicatorsHeight = activeIndicators
    .map((i) => i.height)
    .reduce<number>((sum, current) => sum + current, 0);
  const newChartIndicators = activeIndicators.filter((i) => i.isNewChart);
  const mainChartIsLast = activeIndicators.length === 0;

  const {
    data,
    displayXAccessor,
    xAccessor,
    xScale,
  } = useMemo(() => xScaleProvider(calculatedData || []), [calculatedData]);

  const end = xAccessor(last(data));
  const start = xAccessor(data[data.length - 150]);

  const [xExtents, setXExtents] = useState<number[]>([]);

  const setTime = useCallback((calc: (date: Date) => Date) => {
    if (!ref.current) return;
    const { plotData } = ref.current.getDataInfo();

    const lastData = last(plotData);
    const calcDate = calc(lastData.date);
    let startData = data[data.length - 100];
    
    for (let i = data.length - 1; i >= 0; i -= 1) {
      if (isBefore(data[i].date, calcDate)) {
        startData = data[i];
        break;
      }
    }

    const xStart = xAccessor(startData);
    const xEnd = xAccessor(lastData);

    setXExtents([xStart, xEnd]);
  }, [data, xAccessor, ref]);

  useEffect(() => {
    setXExtents([start, end]);
  }, [end, start]);

  return {
    calculatedData,
    indicatorsHeight,
    newChartIndicators,
    mainChartIsLast,
    xExtents,
    xScale,
    displayXAccessor,
    xAccessor,
    data,
    setTime,
    ref,
  };
};
