import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import Button from '@option-blitz/libs/components/inputs/Button';
import { RightSidebarReturns } from '@option-blitz/libs/components/rightSidebar/RightSidebarReturns';
import { useBinarySidebarHandlers } from '../../../hooks/rightSidebar/useBinarySidebarHandlers';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import styles from './styles.module.scss';
import { RightSidebarPosInfo } from '../../../components/rightSidebar/RightSidebarPosInfo';

interface Props {
  mainChart?: React.ReactNode
}

const BinaryMobile: FC<Props> = ({ mainChart }) => {
  const {
    position: {
      positionItems,
      date,
      viewClick,
    },
    trade: {
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
    <RightSidebarNavigation isMobile>
      <div className={styles.chart_wrap}>
        {mainChart}
      </div>

      <div className={styles.trade}>
        <div className={styles.chart_wrap}>
          {mainChart}
        </div>
        <div className={styles.trade_content}>
          <div className={styles.input_wrap}>
            <RightSidebarInput
              type="small"
              className={styles.amount}
              label="Trade amount"
              symbol="$"
              value={inputValue}
              onFirstBtnClick={minusClick}
              onSecondBtnClick={plusClick}
              onChange={inputChange}
              firstBtnIcon={FontIconName.Minus}
              secondBtnIcon={FontIconName.Plus}
            />
            <RightSidebarTime type="small" className={styles.time} />
          </div>

          <RightSidebarReturns className={styles.returns} type="small" percents="75" balance="0.000" />

          <div className={styles.button_wrap}>
            <Button onClick={callClick} color="primary" className={styles.button}>
              <FontIcon size={16} className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
              Call
            </Button>
            <Button onClick={pullClick} color="secondary" className={styles.button}>
              <FontIcon size={16} className={styles.pull_arrow} name={FontIconName.ArrowBigRight} />
              Put
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.positions_wrap}>
        <div className={styles.positions}>
          <RightSidebarPosInfo type="small" items={positionItems} date={date} title="BTCUSD" />
          <Button
            onClick={viewClick}
            className={styles.position_button}
          >
            View
          </Button>
        </div>
      </div>
    </RightSidebarNavigation>
  );
};

export { BinaryMobile };
