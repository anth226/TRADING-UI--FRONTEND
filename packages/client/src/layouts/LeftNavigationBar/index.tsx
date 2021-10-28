import React, { FC } from 'react';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Link from '@option-blitz/libs/components/inputs/Link';
import styles from './styles.module.scss';
import { Routes } from '../../constants/routes';
import { ExpandablePart } from './ExpandablePart';
import { NavigationItem } from './NavigationItem';
import { useLeftNavigationBarHandlers } from '../../hooks/leftSidebar/useLeftNavigationBarHandlers';

const LeftNavigationBar: FC = () => {
  const {
    rootItems,
    activeRootItem,
    activeNavItem,
    setActiveRootType,
    setActiveNavItem,
  } = useLeftNavigationBarHandlers();
  
  return (
    <div className={styles.wrap}>
      <div className={styles.section}>
        {rootItems.map((expandableItem) => (
          <ExpandablePart
            key={expandableItem.name}
            type={expandableItem.name}
            setType={setActiveRootType}
            activeType={activeRootItem}
            icon={expandableItem.icon}
            iconSize={expandableItem.size}
            image={expandableItem.image}
          >

            {expandableItem.items.map((item) => (
              <NavigationItem
                key={item.name}
                type={item.name}
                setType={setActiveNavItem}
                activeType={activeNavItem}
              >
                {item.icon && <FontIcon size={20} name={item.icon} />}
                {item.image && <img style={{ height: 20 }} src={item.image} alt="icon" />}
              </NavigationItem>
            ))}

          </ExpandablePart>
        ))}
      </div>

      <div className={styles.section}>
        <Link className={styles.link} to={Routes.Homepage}>
          <FontIcon className={styles.link_icon} size={20} name={FontIconName.Info} />
        </Link>
        <Link className={styles.link} to={Routes.Homepage}>
          <FontIcon className={styles.link_icon} size={20} name={FontIconName.Settings} />
        </Link>
        <Link className={styles.link} to={Routes.Homepage}>
          <FontIcon className={styles.link_icon} size={20} name={FontIconName.Logout} />
        </Link>
      </div>
    </div>
  );
};

export { LeftNavigationBar };
