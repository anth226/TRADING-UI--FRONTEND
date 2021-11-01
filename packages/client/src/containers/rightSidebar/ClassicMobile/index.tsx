import React, { FC } from 'react';
import { RightSidebarNavigation } from '@option-blitz/libs/components/rightSidebar/RightSidebarNavigation';
import Button from '@option-blitz/libs/components/inputs/Button';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { RightSidebarTime } from '@option-blitz/libs/components/rightSidebar/RightSidebarTime';
import { Collapse } from '@option-blitz/libs/components/common/Collapse';
import { ProfitChart } from '../../../components/charts/ProfitChart';
import styles from './styles.module.scss';
import { ClassicPositions } from '../RightSidebarClassic/ClassicPositions';
import { useClassicSidebarHandlers } from '../../../hooks/rightSidebar/useClassicSidebarHandlers';
import { useInputHandlers } from '../../../hooks/rightSidebar/useInputHandlers';
import { useCollapse } from '../../../hooks/useCollapse';

const ClassicMobile: FC = () => {
  const {
    trade: {
      activeButton,
      callClick,
      putClick,
      placeOrderClick,
      profitItems,
    },
  } = useClassicSidebarHandlers();

  const {
    firstBtnClick: upPrice,
    secondBtnClick: downPrice,
    onChange: changePrice,
    value: price,
  } = useInputHandlers();

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

  const {
    isActive: takeProfitActive,
    onChange: changeTakeProfit,
  } = useCollapse();

  return (
    <RightSidebarNavigation isMobile>
      <div>
        {/* TODO: Chart component */}
      </div>

      <div className={styles.trade}>
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
        <div className={styles.input_wrap}>
          <RightSidebarInput
            type="small"
            className={styles.input}
            label="Qty"
            onFirstBtnClick={downQty}
            onSecondBtnClick={upQty}
            onChange={changeQty}
            value={qty}
            firstBtnIcon={FontIconName.Minus}
            secondBtnIcon={FontIconName.Plus}
          />
          <RightSidebarTime className={styles.time} type="small" />
        </div>

        <ProfitChart isMobile profitItems={profitItems} />

        <Collapse
          isActive={takeProfitActive}
          onClick={changeTakeProfit}
          title="Take profit"
          titleClassName={styles.collapse_title}
          className={styles.collapse}
        >
          <div className={styles.second_input_wrap}>
            <RightSidebarInput
              type="small"
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
              type="small"
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
        </Collapse>

        <Button onClick={placeOrderClick} className={styles.button_order}>
          Place order
        </Button>
      </div>

      <ClassicPositions isMobile />
    </RightSidebarNavigation>
  );
};

export { ClassicMobile };
