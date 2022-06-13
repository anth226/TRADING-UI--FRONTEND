import React, { FC } from 'react';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
import { RightSidebarInput } from '@option-blitz/libs/components/rightSidebar/RightSidebarInput';
import { FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';
import Button from '@option-blitz/libs/components/inputs/Button';
import cx from 'classnames';
import { Collapse } from '@option-blitz/libs/components/common/Collapse';
import styles from './styles.module.scss';
import { RightSidebarPosInfo } from '../../../../components/rightSidebar/RightSidebarPosInfo';
import { useClassicSidebarHandlers } from '../../../../hooks/rightSidebar/useClassicSidebarHandlers';
import { useCheckbox } from '../../../../hooks/useCheckbox';
import { useInputHandlers } from '../../../../hooks/rightSidebar/useInputHandlers';
import { useCollapse } from '../../../../hooks/useCollapse';

interface Props {
  isMobile?: boolean
}

interface WrapperProps {
  isMobile?: boolean
  checkbox: boolean
  onCheckboxChange: (val: boolean) => void
}

export const Wrapper: FC<WrapperProps> = ({
  children, checkbox, onCheckboxChange, isMobile, 
}) => {
  const {
    isActive,
    onChange,
  } = useCollapse();
  return (
    <>
      {!isMobile && (
        <>
          <div className={styles.checkbox_wrap}>
            <p className={styles.checkbox_label}>Take Profit</p>
            <Checkbox size={14} iconSize={7} checked={checkbox} onCheck={onCheckboxChange} />
          </div>
          <div className={styles.inputs_wrap}>
            {children}
          </div>
        </>
      )}
      {isMobile && (
        <Collapse
          className={styles.collapse}
          titleClassName={styles.co}
          isActive={isActive}
          onClick={onChange}
          title="Take Profit"
        >
          <div className={cx(styles.inputs_wrap, styles.collapse_content)}>
            {children}
          </div>
        </Collapse>
      )}
    </>
  );
};

const ClassicPositions: FC<Props> = ({
  isMobile,
}) => {
  const type = isMobile ? 'small' : 'normal';

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
    <div className={cx({ [styles.wrap_mobile]: isMobile })}>
      <RightSidebarPosInfo type={type} title="BTCUSD" items={positionItems} date={date} />
      <Wrapper isMobile={isMobile} checkbox={checkbox} onCheckboxChange={onCheckboxChange}>
        <RightSidebarInput
          type={type}
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
          type={type}
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
      </Wrapper>
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
  );
};

export { ClassicPositions };
