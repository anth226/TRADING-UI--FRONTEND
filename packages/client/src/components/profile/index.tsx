/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@option-blitz/libs/components/inputs/Button';
import Binary from "./BinaryTab/Binary";
import TurboRush from "./TurboRushTab/TurboRush";
import Rush from "./RushTab/Rush";
import Touch from "./TouchTab/Touch";
import NoTouch from "./NoTouchTab/NoTuch";

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const buttons = [
  {
    name: 'BINARY',
  },
  {
    name: 'ClASSIC',
  },
  {
    name: 'TURBOS',
  },
  {
    name: 'TOUCH',
  },
  {
    name: 'NO-TOUCH',
  }
]

const HistoryOpenPosition: FC<Props> = ({
                                          // onBack,
                                          // isMobile,
                                        }) => {

  const [activeButton, setActiveButton] = useState(1)

  const whichTab = () => {
    switch (activeButton) {
      case 1:
        return <Binary/>
      case 2:
        return <TurboRush/>
      case 3:
        return <Rush/>
      case 4:
        return <Touch/>
      default:
        return <NoTouch/>
    }
  }

  return (

      <div className={styles.wrap}>
        <div style={{display:'flex', columnGap: '12px'}}>
          {buttons.map((item,i )=>(
              <Button color={'transparent_primary'} className={activeButton === i + 1 ? styles.buttonActive : styles.button}
                      size={5} onClick={() => setActiveButton(i + 1)}>
                <p>{item.name}</p>
              </Button>
          ))}
        </div>
        {whichTab()}
      </div>
  );
};
export { HistoryOpenPosition };
