/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import Button from '@option-blitz/libs/components/inputs/Button';
import Clasic from "./ClasicTab/Clasic";
import Binary from "./BinaryTab/Binary";
// import TurboRush from "./TurboRushTab/TurboRush";
// import Rush from "./RushTab/Rush";
import NoTouch from "./NoTouchTab/NoTuch";
import Touch from "./TouchTab/Touch";
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const buttons = [
  {
    name: 'CLASSIC',
  },
  {
    name: 'BINARY',
  },
  {
    name: 'NO-TOUCH',
  },
  {
    name: 'TOUCH',
  },
  {
    name: 'TURBOS',
  },
  // {
  //   name: 'RUSH',
  // },


]

const OpenPosition: FC<Props> = ({
                           onBack,
                           isMobile,
                         }) => {

  const [activeButton, setActiveButton] = useState(1)
  interface Props {
    isMobile?: boolean;
  }

  const whichTab: FC<Props> = ({isMobile}) => {
    switch (activeButton) {
      case 1:
        return <Clasic isMobile={isMobile}/>
      case 2:
        return <Binary isMobile={isMobile}/>
      case 3:
        return <NoTouch isMobile={isMobile}/>
      case 4:
      return <Touch isMobile={isMobile}/>
      // case 4:
      //   return <Rush/>
      // case 5:
      //   return <TurboRush/>
      default:
        return <Clasic />
    }
  }

  // @ts-ignore
  return (

    <div className={isMobile ? styles.wrap_mob : styles.wrap}>
      {!isMobile && (
          <div className={styles.title_wrap}>
            <p className={styles.title}>OPEN POSITIONS</p>
            <button onClick={onBack} className={styles.arrow_wrap}>
              <img src={arrow} alt='back' />
            </button>
          </div>
      )}
      {isMobile && (
          <div className={styles.title_wrap_mob}>
            <FontIcon className={styles.icon} name={FontIconName.OpenPos} />
            <p className={styles.title_mob}>OPEN POSITIONS</p>
          </div>
      )}


      <div className={ isMobile ?  styles.buttons_pull_mob : styles.buttons_pull }
          // style={{display:'flex', columnGap: '12px'}
      >
        {buttons.map((item,i )=>(
          <Button color={'transparent_primary'} className={activeButton === i + 1 ? styles.buttonActive : styles.button}
                  size={5} onClick={() => setActiveButton(i + 1)}>
          <p>{item.name}</p>
          </Button>
        ))}
      </div>
      {whichTab({isMobile})}
    </div>
  );
};
export { OpenPosition };
