import React, { FC } from 'react';
import { ProductType } from '@option-blitz/libs/constants/product';
import useResize from '@option-blitz/libs/hooks/useResize';
import styles from './styles.module.scss';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectTabsProp } from '../../../store/tabs/selectors';
import { RightSidebarClassic } from '../RightSidebarClassic';
import { RightSidebarBinary } from '../RightSidebarBinary';
import { RightSidebarTouch } from '../RightSidebarTouch';
import { ClassicMobile } from '../ClassicMobile';
import { BinaryMobile } from '../BinaryMobile';
import { TouchMobile } from '../TouchMobile';

const RightSidebar: FC = () => {
  const activeProductType = useShallowSelector(selectTabsProp('activeProductType'));
  const { isMobile } = useResize();
  
  return (
    <>
      {!isMobile && (
        <div className={styles.wrap}>
          {activeProductType === ProductType.Classic && <RightSidebarClassic />}
          {activeProductType === ProductType.Binary && <RightSidebarBinary />}
          {activeProductType === ProductType.Touch && <RightSidebarTouch />}
        </div>
      )}

      {isMobile && (
        <div className={styles.mobile_wrap}>
          {activeProductType === ProductType.Classic && <ClassicMobile />}
          {activeProductType === ProductType.Binary && <BinaryMobile />}
          {activeProductType === ProductType.Touch && <TouchMobile />}
        </div>
      )}
    </>
  );
};

export { RightSidebar };
