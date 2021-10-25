import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarProgressbar } from '@option-blitz/libs/components/rightSidebar/RightSidebarProgressbar';
import Button from '@option-blitz/libs/components/inputs/Button';
import { Coin, coinIcons } from '@option-blitz/libs/constants/coin';
import styles from './styles.module.scss';
import { Letter, letterIcons } from '../../../constants/letters/letters';
import { useBinarySidebarHandlers } from '../../../hooks/rightSidebar/useBinarySidebarHandlers';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import { RightSidebarPosInfo } from '../../../components/rightSidebar/RightSidebarPosInfo';

const RightSidebarBinary: FC = () => {
  const {
    position: {
      positionItems,
      date,
      viewClick,
    },
    trade: {
      progress,
      callClick,
      pullClick,
    },
  } = useBinarySidebarHandlers();
  
  const {
    value: inputValue,
    firstBtnClick: plusClick,
    secondBtnClick: minusClick,
    onChange: inputChange,
  } = useInputHandlers('0.00');
  
  return (
    <div className={styles.wrap}>
      <RightSidebarNavigation>
        <div>
          <RightSidebarInput
            className={styles.amount}
            label="Trade amount"
            symbol="$"
            value={inputValue}
            onFirstBtnClick={plusClick}
            onSecondBtnClick={minusClick}
            onChange={inputChange}
            firstBtnIcon={FontIconName.Minus}
            secondBtnIcon={FontIconName.Plus}
          />
          <RightSidebarTime className={styles.time} />
          <RightSidebarProgressbar className={styles.progressbar} value={progress} />

          <div className={styles.button_wrap}>
            <Button onClick={callClick} color="primary" className={styles.button}>
              <FontIcon className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
              Call
            </Button>
            <Button onClick={pullClick} color="secondary" className={styles.button}>
              <FontIcon className={styles.pull_arrow} name={FontIconName.ArrowBigRight} />
              Pull
            </Button>
          </div>
        </div>

        <div>
          <RightSidebarPosInfo items={positionItems} date={date} title="BTCUSD" />
          <Button
            onClick={viewClick}
            className={styles.position_button}
          >
            View
          </Button>
        </div>
      </RightSidebarNavigation>
    </div>
  );
};

export { RightSidebarBinary };
