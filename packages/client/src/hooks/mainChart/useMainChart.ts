import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import * as d3 from 'd3';
import { discontinuousTimeScaleProvider, last } from 'react-financial-charts';
import { isBefore } from 'date-fns';
import { ChartMenuIndicator } from './useChartMenuHandlers';

const link = 'https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv';
const parseDate = d3.timeParse('%Y-%m-%d');

const xScaleProvider = discontinuousTimeScaleProvider
  .inputDateAccessor((d) => d.date);

export const useMainChart = (activeIndicators: ChartMenuIndicator[]) => {
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

    activeIndicators.forEach(({ value }) => {
      data = value(data);
    });

    return data;
  }, [activeIndicators, initialData]);

  const indicatorsHeight = activeIndicators
    .map((i) => i.height)
    .reduce<number>((sum, current) => sum + current, 0);

  const newChartIndicators = activeIndicators.filter((i) => i.isNewChart);
  const mainChartIsLast = activeIndicators.length === 0;

  const {
    data,
    xScale,
    xAccessor,
    displayXAccessor,
  } = xScaleProvider(calculatedData || []);

  const end = xAccessor(last(data));
  const start = xAccessor(data[data.length - 150]);

  const [xExtents, setXExtents] = useState<number[]>([]);

  const setTime = useCallback((calc: (date: Date) => Date) => {
    const lastData = last(data);
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
  }, [data, xAccessor]);
  
  console.log(data);

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
  };
};
