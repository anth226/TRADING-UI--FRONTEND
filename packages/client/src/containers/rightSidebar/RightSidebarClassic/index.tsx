import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import cx from 'classnames';
import { RightSidebarPosInfo } from '../../../components/rightSidebar/RightSidebarPosInfo';
import { useClassicSidebarHandlers } from '../../../hooks/rightSidebar/useClassicSidebarHandlers';
import styles from './styles.module.scss';
import { useCheckbox } from '../../../hooks/useCheckbox';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';

const RightSidebarClassic: FC = () => {
  const {
    positions: {
      positionItems,
      date,
      sellClick,
      settleClick,
      targetPriceClick,
    },
  } = useClassicSidebarHandlers();
  
  const {
    checkbox, onCheckboxChange,
  } = useCheckbox();
  
  const {
    firstBtnClick: upPrice,
    secondBtnClick: downPrice,
    onChange: changePrice,
    value: price,
  } = useInputHandlers();

  const {
    firstBtnClick: upRoi,
    secondBtnClick: downRoi,
    onChange: changeRoi,
    value: roi,
  } = useInputHandlers();

  return (
    <div className={styles.wrap}>
      <RightSidebarNavigation>
        <div />

        <div>
          <RightSidebarPosInfo dateInTitle title="BTCUSD" items={positionItems} date={date} />
          <div className={styles.checkbox_wrap}>
            <p className={styles.checkbox_label}>Take Profit</p>
            <Checkbox size={14} iconSize={7} checked={checkbox} onCheck={onCheckboxChange} />
          </div>
          <div className={styles.inputs_wrap}>
            <RightSidebarInput
              className={styles.input}
              label="Target price"
              symbol="$"
              onFirstBtnClick={upPrice}
              onSecondBtnClick={downPrice}
              onChange={changePrice}
              value={price}
              firstBtnIcon={FontIconName.ArrowRight}
              secondBtnIcon={FontIconName.ArrowRight}
              firstIconClassName={styles.up_icon}
              secondIconClassName={styles.down_icon}
            />
            <RightSidebarInput
              className={styles.input}
              label="Target ROI"
              symbol="%"
              onFirstBtnClick={upRoi}
              onSecondBtnClick={downRoi}
              onChange={changeRoi}
              value={roi}
              firstBtnIcon={FontIconName.ArrowRight}
              secondBtnIcon={FontIconName.ArrowRight}
              firstIconClassName={styles.up_icon}
              secondIconClassName={styles.down_icon}
            />
          </div>
          <div className={styles.buttons_wrap}>
            <Button
              onClick={targetPriceClick}
              color="transparent_primary" 
              className={cx(styles.button, styles.target_price_btn)}
            >
              - target price
            </Button>
            <Button
              onClick={sellClick}
              color="transparent_primary" 
              className={styles.button}
            >
              sell
            </Button>
            <Button
              onClick={settleClick}
              className={styles.button} 
              color="primary"
            >
              settle
            </Button>
          </div>
        </div>
      </RightSidebarNavigation>
    </div>
  );
};

export { RightSidebarClassic };
