import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { RightSidebarReturns } from '@option-blitz/libs/components/rightSidebar/RightSidebarReturns';
import Button from '@option-blitz/libs/components/inputs/Button';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import { Collapse } from '@option-blitz/libs/components/common/Collapse';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { useTouchSidebarHandlers } from '../../../hooks/rightSidebar/useTouchSidebarHandlers';
import styles from './styles.module.scss';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import { useCheckbox } from '../../../hooks/useCheckbox';
import { useCollapse } from '../../../hooks/useCollapse';
import { RightSidebarPosInfo } from '../../../components/rightSidebar/RightSidebarPosInfo';

interface Props {
  mainChart?: React.ReactNode
}

const NoTouchMobile: FC<Props> = ({ mainChart }) => {
  const {
    trade: {
      placeTrade,
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
  } = useInputHandlers('437.1');

  const {
    firstBtnClick: putUp,
    secondBtnClick: putDown,
    value: putValue,
    onChange: putChange,
  } = useInputHandlers('437.1');

  const {
    checkbox: callCheckbox,
    onCheckboxChange: callCheckboxChange,
  } = useCheckbox(true);

  const {
    checkbox: putCheckbox,
    onCheckboxChange: putCheckboxChange,
  } = useCheckbox(true);

  const {
    isActive: builderActive,
    onChange: onChangeBuilder,
  } = useCollapse();

  return (
    <RightSidebarNavigation isMobile>
      <div className={styles.chart_wrap}>
        {mainChart}
      </div>

      <div className={styles.trade}>
        <div className={styles.chart_wrap}>
          {mainChart}
        </div>
        <div className={styles.trades_wrap}>
          <Collapse
            className={styles.collapse}
            title="Option builder"
            titleClassName={styles.collapse_title}
            isActive={builderActive}
            onClick={onChangeBuilder}
          >
            <div className={styles.checkbox_wrap}>
              <Checkbox
                size={16}
                iconSize={8}
                checked={callCheckbox}
                onCheck={callCheckboxChange}
                labelClassName={styles.checkbox_label}
              >
                No-Touch Call
              </Checkbox>
              <RightSidebarInput
                type="small"
                value={callValue}
                className={styles.strike_price}
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
            </div>
            <div className={styles.checkbox_wrap}>
              <Checkbox
                size={16}
                iconSize={8}
                checked={putCheckbox}
                onCheck={putCheckboxChange}
                labelClassName={styles.checkbox_label}
              >
                No-Touch Put
              </Checkbox>
              <RightSidebarInput
                type="small"
                value={putValue}
                className={styles.strike_price}
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
            </div>
          </Collapse>

          <div className={styles.input_wrap}>
            <RightSidebarInput
              type="small"
              value={amountValue}
              className={styles.trade_amount}
              label="Trade amount"
                            // symbol="$"
              onFirstBtnClick={plusClick}
              onSecondBtnClick={minusClick}
              onChange={amountChange}
              firstBtnIcon={FontIconName.Minus}
              secondBtnIcon={FontIconName.Plus}
            />
            <RightSidebarTime type="small" className={styles.time} />
          </div>
          <RightSidebarReturns className={styles.returns} type="small" percents="200" balance="0.00" />
          <Button className={styles.button} onClick={placeTrade} color="primary">
            Place trade
          </Button>
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

export { NoTouchMobile };
