import React, { FC } from 'react';
import { AutoSizer } from 'react-virtualized';
import { ProductType } from '@option-blitz/libs/constants/product';
import useResize from '@option-blitz/libs/hooks/useResize';
import { MainChart } from '../../../components/charts/MainChart';
import { ClassicBarrier } from '../../../components/charts/MainChart/barriers/ClassicBarrier';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectClassic } from '../../../store/classic/selectors';
import { selectTouch } from '../../../store/touch/selectors';
import { selectTabs } from '../../../store/tabs/selectors';
import { TouchBarrier } from '../../../components/charts/MainChart/barriers/TouchBarrier';

const MainChartContainer: FC = () => {
  const { activeProductType } = useShallowSelector(selectTabs);
  const { takeProfitCheck, targetPrice } = useShallowSelector(selectClassic);
  const {
    callPrice, putPrice, callCheck, putCheck, 
  } = useShallowSelector(selectTouch);
  const { isMobile } = useResize();
  
  return (
    <AutoSizer>
      {({ width, height }) => (
        <MainChart isMobile={isMobile} width={width} height={isMobile ? height - 50 : height}>
          {activeProductType === ProductType.Classic && (
            <ClassicBarrier isActive={takeProfitCheck} value={targetPrice} width={width} />
          )}
          
          {activeProductType === ProductType.Touch && (
            <TouchBarrier
              callIsActive={callCheck}
              putIsActive={putCheck}
              width={width}
              callValue={callPrice}
              putValue={putPrice}
            />
          )}
        </MainChart>
      )}
    </AutoSizer>
  );
};

export { MainChartContainer };
