import React, { FC } from 'react';
import { ProductType } from '@option-blitz/libs/constants/product';
import styles from './styles.module.scss';
import { ClassicMobile } from '../rightSidebar/ClassicMobile';
import { BinaryMobile } from '../rightSidebar/BinaryMobile';
import { TouchMobile } from '../rightSidebar/TouchMobile';
import { useShallowSelector } from '../../hooks/useShallowSelector';
import { selectTabsProp } from '../../store/tabs/selectors';
import { NoTouchMobile } from '../rightSidebar/NoTouchMobile';

interface Props {
  mainChart: React.ReactNode
}

const MobileProducts: FC<Props> = ({ mainChart }) => {
  const activeProductType = useShallowSelector(selectTabsProp('activeProductType'));
  return (
    <div className={styles.mobile_wrap}>
      {activeProductType === ProductType.Classic && <ClassicMobile mainChart={mainChart} />}
      {activeProductType === ProductType.Binary && <BinaryMobile mainChart={mainChart} />}
      {activeProductType === ProductType.Touch && <TouchMobile mainChart={mainChart} />}
      {/* {activeProductType === ProductType.Turbo && <TurboMobile mainChart={mainChart}/>} */}
      {/* {activeProductType === ProductType.Rush && <RushMobile mainChart={mainChart} />} */}
      {activeProductType === ProductType.NoTouch && <NoTouchMobile mainChart={mainChart} />}
    </div>
  );
};

export { MobileProducts };
