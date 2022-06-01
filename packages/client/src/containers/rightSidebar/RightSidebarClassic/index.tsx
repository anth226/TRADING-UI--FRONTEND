import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import cx from 'classnames';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import { useClassicSidebarHandlers } from '../../../hooks/rightSidebar/useClassicSidebarHandlers';
import styles from './styles.module.scss';
import { ClassicPositions } from './ClassicPositions';
import { ProfitChart } from '../../../components/charts/ProfitChart';
import { useShallowSelector } from '../../../hooks/useShallowSelector';
import { selectClassic } from '../../../store/classic/selectors';

const RightSidebarClassic: FC = () => {
  const { targetPrice, takeProfitCheck } = useShallowSelector(selectClassic);

  const {
    trade: {
      activeButton,
      callClick,
      putClick,
      placeOrderClick,
      profitItems,
      toggleTakeProfit,
      setTargetPrice,
    },
  } = useClassicSidebarHandlers();
  
  const {
    firstBtnClick: upPrice,
    secondBtnClick: downPrice,
    onChange: changePrice,
    value: price,
  } = useInputHandlers(`${targetPrice}`, setTargetPrice);

  const {
    firstBtnClick: upQty,
    secondBtnClick: downQty,
    onChange: changeQty,
    value: qty,
  } = useInputHandlers();

  const {
    firstBtnClick: upPriority,
    secondBtnClick: downPriority,
    onChange: changePriority,
    value: priority,
  } = useInputHandlers();

  return (
    <div className={styles.wrap}>
      <RightSidebarNavigation>
        <div>
          <div className={styles.input_wrap}>
            <RightSidebarInput
              className={styles.input}
              label="Qty"
              onFirstBtnClick={downQty}
              onSecondBtnClick={upQty}
              onChange={changeQty}
              value={qty}
              firstBtnIcon={FontIconName.Minus}
              secondBtnIcon={FontIconName.Plus}
            />
            <RightSidebarTime className={styles.time} />
          </div>

          <div className={styles.button_wrap}>
            <Button
              onClick={callClick}
              className={styles.button}
              color={activeButton === 'call' ? 'primary' : 'transparent_primary'}
            >
              <FontIcon className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
              <p>Call</p>
            </Button>
            <Button
              onClick={putClick}
              className={styles.button}
              color={activeButton === 'put' ? 'secondary' : 'transparent_secondary'}
            >
              <FontIcon className={styles.put_arrow} name={FontIconName.ArrowBigRight} />
              <p>Put</p>
            </Button>
          </div>
          
          <ProfitChart profitItems={profitItems} />

          <div className={styles.checkbox_wrap}>
            <p className={styles.checkbox_label}>Take Profit</p>

            <Checkbox
              className={takeProfitCheck === true
                ? styles.check_box_active
                : styles.check_box_unactive}
              size={14}
              iconSize={7}
              checked={takeProfitCheck}
              onCheck={toggleTakeProfit}
            />
          </div>
          <div className={styles.second_input_wrap}>
            <RightSidebarInput
              className={cx(styles.input, styles.target_price)}
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
              label="Target priority"
              onFirstBtnClick={upPriority}
              onSecondBtnClick={downPriority}
              onChange={changePriority}
              value={priority}
              firstBtnIcon={FontIconName.ArrowRight}
              secondBtnIcon={FontIconName.ArrowRight}
              firstIconClassName={styles.up_icon}
              secondIconClassName={styles.down_icon}
            />
          </div>

          <Button onClick={placeOrderClick} className={styles.button_order}>
            Place order
          </Button>
        </div>
        
        <ClassicPositions />
      </RightSidebarNavigation>
    </div>
  );
};

export { RightSidebarClassic };
