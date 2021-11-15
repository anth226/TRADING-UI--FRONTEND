import React, { FC } from 'react';
import { AutoSizer } from 'react-virtualized';
import { MainChart } from '../../../components/charts/MainChart';
import { ClassicBarrier } from '../../../components/charts/MainChart/barriers/ClassicBarrier';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectClassic } from '../../../store/classic/selectors';

const MainChartContainer: FC = () => {
  const { takeProfitCheck, targetPrice } = useShallowSelector(selectClassic);
  
  return (
    <AutoSizer>
      {({ width, height }) => (
        <MainChart width={width} height={height}>
          {takeProfitCheck && (
            <ClassicBarrier value={targetPrice} width={width} />
          )}
        </MainChart>
      )}
    </AutoSizer>
  );
};

export { MainChartContainer };
