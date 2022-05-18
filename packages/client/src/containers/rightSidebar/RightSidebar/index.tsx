import React, { FC } from 'react';
import { ProductType } from '@option-blitz/libs/constants/product';
import styles from './styles.module.scss';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectTabsProp } from '../../../store/tabs/selectors';
import { RightSidebarClassic } from '../RightSidebarClassic';
import { RightSidebarBinary } from '../RightSidebarBinary';
// import { RightSidebarTouch } from '../RightSidebarTouch';
import { RightSidebarTurbo } from '../RightSidebarTurbo';

const RightSidebar: FC = () => {
  const activeProductType = useShallowSelector(selectTabsProp('activeProductType'));
  
  return (
    <div className={styles.wrap}>
      {activeProductType === ProductType.Classic && <RightSidebarClassic />}
      {activeProductType === ProductType.Binary && <RightSidebarBinary />}
      {activeProductType === ProductType.Touch && <RightSidebarTurbo />}
    </div>
  );
};

export { RightSidebar };
