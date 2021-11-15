import React, { FC } from 'react';
import { AutoSizer } from 'react-virtualized';
import { MainChart } from '../../../components/charts/MainChart';

const MainChartContainer: FC = () => (
  <AutoSizer>
    {({ width, height }) => (
      <MainChart width={width} height={height} />
    )}
  </AutoSizer>
);

export { MainChartContainer };
