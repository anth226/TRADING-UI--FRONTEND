import React, { FC } from 'react';
import { useShallowSelector } from '../../hooks/useShallowSelector';
import { selectNavigationProp } from '../../store/navigation/selectors';
import { HotAssets } from '../leftSidebar/HotAssets';
import { Navigation } from '../../constants/navigation/navigation';
import styles from './styles.module.scss';

const MobileNavigation: FC = () => {
  const activeItem = useShallowSelector(selectNavigationProp('activeNavigation'));
  return (
    <div className={styles.wrap}>
      {activeItem === Navigation.HotAssets && <HotAssets isMobile />}
    </div>
  );
};

export { MobileNavigation };
