import { useEffect, useMemo, useState } from 'react';
import * as d3 from 'd3';
import { ChartMenuIndicator } from './useChartMenuHandlers';

const link = 'https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv';
const parseDate = d3.timeParse('%Y-%m-%d');

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
  
  return { calculatedData };
};
