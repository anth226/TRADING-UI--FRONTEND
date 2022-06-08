import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import { RightSidebarReturns } from '@option-blitz/libs/components/rightSidebar/RightSidebarReturns';
import Button from '@option-blitz/libs/components/inputs/Button';
import styles from './styles.module.scss';
import { useTouchSidebarHandlers } from '../../../hooks/rightSidebar/useTouchSidebarHandlers';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import { RightSidebarPosInfo } from '../../../components/rightSidebar/RightSidebarPosInfo';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectTouch } from '../../../store/touch/selectors';

const RightSidebarNoTouch: FC = () => {
  const {
    putCheck, callCheck, putPrice, callPrice, 
  } = useShallowSelector(selectTouch);
  
  const {
    trade: {
      placeTrade,
      setCallPrice,
      setPutPrice,
      toggleCall,
      togglePut,
    },
    positions: {
      positionItems,
      date,
      viewClick,
    },
  } = useTouchSidebarHandlers();

  const {
    firstBtnClick: minusClick,
    secondBtnClick: plusClick,
    value: amountValue,
    onChange: amountChange,
  } = useInputHandlers();

  const {
    firstBtnClick: callUp,
    secondBtnClick: callDown,
    value: callValue,
    onChange: callChange,
  } = useInputHandlers(`${callPrice}`, setCallPrice);

  const {
    firstBtnClick: putUp,
    secondBtnClick: putDown,
    value: putValue,
    onChange: putChange,
  } = useInputHandlers(`${putPrice}`, setPutPrice);

  return (
    <div className={styles.wrap}>
      <RightSidebarNavigation>
        <div>
          <div className={styles.checkbox_wrap}>
            <p className={styles.checkbox_label}>No-Touch call</p>
            <Checkbox 
              size={14} 
              iconSize={7} 
              checked={callCheck} 
              onCheck={toggleCall}
              className={callCheck === true ? styles.check_box_active : styles.check_box_unactive}
            />

          </div>
          <RightSidebarInput
            value={callValue}
            className={styles.input}
            label="Strike price"
            symbol="-10%"
            onFirstBtnClick={callUp}
            onSecondBtnClick={callDown}
            onChange={callChange}
            firstBtnIcon={FontIconName.ArrowRight}
            secondBtnIcon={FontIconName.ArrowRight}
            firstIconClassName={styles.up_icon}
            secondIconClassName={styles.down_icon}
          />
          <div className={styles.checkbox_wrap}>
            <p className={styles.checkbox_label}>No-Touch put</p>
            <Checkbox
              size={14}
              iconSize={7}
              checked={putCheck}
              onCheck={togglePut}
              className={putCheck === true ? styles.check_box_active : styles.check_box_unactive}
            />
          </div>
          <RightSidebarInput
            value={putValue}
            className={styles.input}
            label="Strike price"
            symbol="-10%"
            onFirstBtnClick={putUp}
            onSecondBtnClick={putDown}
            onChange={putChange}
            firstBtnIcon={FontIconName.ArrowRight}
            secondBtnIcon={FontIconName.ArrowRight}
            firstIconClassName={styles.up_icon}
            secondIconClassName={styles.down_icon}
          />

          <p className={styles.summary}>Summary:</p>
          <p className={styles.summary_info}>
            Double-touch option configured. Underlying price must reach call
            and put strikes at least once during the term of the trade.
          </p>

          <div className={styles.tip_wrap}>
            <p className={styles.tip}>*tip:&nbsp;</p>
            <p className={styles.tip_info}>Try this for volatile trading pairs</p>
          </div>

          <RightSidebarInput
            value={amountValue}
            className={styles.input}
            label="Trade amount"
            symbol="$"
            onFirstBtnClick={plusClick}
            onSecondBtnClick={minusClick}
            onChange={amountChange}
            firstBtnIcon={FontIconName.Minus}
            secondBtnIcon={FontIconName.Plus}
          />
          <RightSidebarTime className={styles.time} />
          <RightSidebarReturns className={styles.returns} percents="200" balance="0.00" />
          <Button className={styles.button} onClick={placeTrade} color="primary">
            Place trade
          </Button>
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

export { RightSidebarNoTouch };
