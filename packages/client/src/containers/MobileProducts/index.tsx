import React, { FC } from 'react';
import { ProductType } from '@option-blitz/libs/constants/product';
import styles from './styles.module.scss';
import { ClassicMobile } from '../rightSidebar/ClassicMobile';
import { BinaryMobile } from '../rightSidebar/BinaryMobile';
import { TouchMobile } from '../rightSidebar/TouchMobile';
import { useShallowSelector } from '../../hooks/useShallowSelector';
import { selectTabsProp } from '../../store/tabs/selectors';

const MobileProducts: FC = () => {
  const activeProductType = useShallowSelector(selectTabsProp('activeProductType'));
  return (
    <div className={styles.mobile_wrap}>
      {activeProductType === ProductType.Classic && <ClassicMobile />}
      {activeProductType === ProductType.Binary && <BinaryMobile />}
      {activeProductType === ProductType.Touch && <TouchMobile />}
    </div>
  );
};

export { MobileProducts };
