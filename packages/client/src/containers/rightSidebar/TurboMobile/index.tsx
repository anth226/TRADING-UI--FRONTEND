/* eslint-disable */
import React, {FC, useState} from 'react';
import styles from './styles.module.scss';
import {RightSidebarTurboNavigation} from "@option-blitz/libs/components/rightSidebar/RightSideBarTurboNavigation";
import Button from "@option-blitz/libs/components/inputs/Button";
import cx from 'classnames';
import {FontIcon, FontIconName} from "@option-blitz/libs/components/inputs/FontIcon";
import {useClassicSidebarHandlers} from "../../../hooks/rightSidebar/useClassicSidebarHandlers";
import Slider from "rc-slider";
import Mark from "../RightSidebarTurbo/Trade/Mark";
import {RightSidebarPosInfo} from "../../../components/rightSidebar/RightSidebarPosInfo";
import {RightSidebarInput} from "@option-blitz/libs/components/rightSidebar/RightSidebarInput";
import {useCheckbox} from "../../../hooks/useCheckbox";
import {useInputHandlers} from "../../../hooks/rightSidebar/useInputHandlers";
import {Checkbox} from "@option-blitz/libs/components/inputs/Checkbox";
import {PositionItem} from "../../../hooks/rightSidebar/useTouchSidebarHandlers";
import {Collapse} from "@option-blitz/libs/components/common/Collapse";
import {RightSidebarNavigation} from "@option-blitz/libs/components/rightSidebar/RightSidebarNavigation";

interface Props {
    mainChart?: React.ReactNode
}

const TurboMobile: FC<Props> = ({ mainChart}) => {
    const [activeButton, setActiveButton] = useState('short')


    const [mark, SetMark]=useState<number| number[]>(45)

    const marksArray = [5, 15, 25, 35, 45, 55, 65];

    const getMarks = () => {
        const obj = {}
        for (const key of marksArray){
            // @ts-ignore
            obj[key]=<Mark active={mark===key} id={key}/>
        }
        return obj
    }

    const type = 'small';
    const abra: PositionItem[] = [
        { label: 'Size', value: '1.0 BTC' },
        { label: 'Strike price', value: '$60.000.00' },
        { label: 'Knock-out price', value: '$54.000.00' },
        { label: 'Unrealized PNL (%ROI)', value: '-$200(-3.00%)' },
    ];
    const bra: PositionItem[] = [
        { label: 'Size', value: '1.0 BTC' },
        { label: 'Cost', value: '$6000' },
        { label: 'Take profit', value: '-' },
        { label: 'Knock-out price', value: '$60,000.00' },
        { label: 'Protection', value: '10%' },
        { label: 'Conditions', value: '$70,000.00' },
    ];

    const {
        positions: {
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
    <RightSidebarTurboNavigation isMobile  >

      <div className={styles.chart_wrap}>
        {mainChart}
      </div>

      <div className={styles.trade}>
            <div className={styles.title}>
                <div className={styles.title_text}> funding rate / 8H</div>
                <div className={styles.percent}>+0.015%</div>
            </div>
          <div className={styles.button_wrap}>
              <Button
                  className={styles.button}
                  color={activeButton === 'long' ? 'primary' : 'transparent_primary'}
                  onClick={()=>{setActiveButton('long')}}
              >
                  <FontIcon className={styles.call_arrow} name={FontIconName.ArrowBigRight} />
                  <p>long</p>
              </Button>
              <Button
                  className={styles.button}
                  color={activeButton === 'short' ? 'secondary' : 'transparent_secondary'}
                  onClick={()=>{setActiveButton('short')}}
              >
                  <FontIcon className={styles.put_arrow} name={FontIconName.ArrowBigRight} />
                  <p>short</p>
              </Button>
          </div>
          <div className={styles.leverage}>LEVERAGE</div>
          <div className={styles.slider_container}>
              <Slider
                  className={styles.slider}
                  activeDotStyle={{
                      border:'1px solid rgba(127,115,24,0.76)',
                      backgroundColor: '#f2de2be6'
                      // backgroundColor: '#f3de2c'
                  }}//АктивныЕ точкИ
                  railStyle={{backgroundColor:'#434c6c',
                      height:'2px',
                      marginTop:1
                  }}//НЕ-Активный трек
                  trackStyle={{backgroundColor:'#f3de2c'}}//Активный трек
                  handleStyle={{
                      backgroundColor: 'rgba(242,222,43,0.5)',
                      border: 'solid 4px #f2de2be6',
                      width:15,
                      height:15.5,
                      marginTop:-6,
                  }}//Активная точкА
                  dotStyle={{
                      border:'1px solid rgba(255,255,255,0)',
                      backgroundColor:'#434c6c'
                  }}// НЕ-Активные точкИ
                  onChange={(value)=>{SetMark(value)}}
                  min={0}
                  max={70}
                  step={null}
                  marks={getMarks()}
                  defaultValue={mark}
                  draggableTrack={true}
              />
          </div>
          <div className={styles.row_trade}>
              <div  className={styles.take_profit}>
                  <RightSidebarNavigation>
                      <div className={styles.column}>
                          <RightSidebarInput
                              type={type}
                              className={styles.input_trade}
                              label="Amm price"
                              symbol="$"
                              onFirstBtnClick={upPrice}
                              onSecondBtnClick={downPrice}
                              onChange={changePrice}
                              value={price}
                          />
                          <RightSidebarInput
                              type={type}
                              className={styles.input_trade}
                              label="quantity"
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
                      <div className={styles.column}>
                          <RightSidebarInput
                              type={type}
                              className={styles.input_trade}
                              label="Trigger price"
                              symbol="$"
                              onFirstBtnClick={upPrice}
                              onSecondBtnClick={downPrice}
                              onChange={changePrice}
                              value={price}
                          />
                          <RightSidebarInput
                              type={type}
                              className={styles.input_trade}
                              label="quantity"
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
                  </RightSidebarNavigation>
              </div>
              <div className={styles.take_profit}>
                  <div className={styles.row_profit}>
                      <div className={styles.title_text}>Take Profit</div>
                      <div className={styles.checkbox}>
                          <Checkbox
                              size={18}
                              iconSize={14}
                              checked={checkbox}
                              onCheck={onCheckboxChange}
                              className={checkbox ? styles.check_box_active : styles.check_box_unactive}
                          />
                      </div>

                  </div>
                  <div className={styles.column}>


                  <RightSidebarInput
                      type={type}
                      className={styles.input_trade}
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
                      className={styles.input_trade}
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
              </div>
          </div>
          <Collapse
              title='SUMMARY'
              className={styles.collapse}
              titleClassName={styles.collapse_position_title}
          >
              <RightSidebarPosInfo
                  type={type} title="BTCUSD"
                  items={bra} date={date} />
          </Collapse>

          <div className={styles.cancel_button}>
              <Button
                  className={styles.cancel}
                  color="primary"
              >
                  Place trade: 6000 usdt
              </Button>
          </div>
      </div>

      <div className={styles.positions_wrap}>
        <div className={styles.positions}>
            <RightSidebarPosInfo type={type} title="BTCUSD" items={abra} date={date} />
            {/*<div className={styles.aps}>*/}
                <Collapse
                    title='take profit'
                    titleClassName={styles.collapse_position_title}
                    className={styles.collapse_position}
                    // className={styles.collapse_position}
                    // contentClassName={styles.container_profit}
                >
                    <div className={styles.row_input}>
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
                            className={cx(styles.button,styles.button_secondary)}
                        >
                            view
                        </Button>
                        <Button
                            onClick={settleClick}
                            className={cx(styles.button,styles.button_secondary)}
                            color="primary"
                        >
                            settle
                        </Button>
                    </div>

                </Collapse>
            {/*</div>*/}

        </div>
      </div>

        <div className={styles.positions_wrap}>

            <div className={styles.row_title}>
                <div className={styles.row}>
                    <Checkbox size={18}
                              iconSize={14}
                              checked={checkbox}
                              onCheck={onCheckboxChange}
                              className={checkbox ? styles.check_box_active : styles.check_box_unactive}
                    />
                    <div className={styles.title_orders}>Hide other pairs</div>
                </div>

                <Button
                    onClick={settleClick}
                    className={styles.button_cancell_all}
                    color="primary"
                >
                    cancell all
                </Button>
            </div>

            <div className={styles.positions}>

                <RightSidebarPosInfo type={type} title="BTCUSD" items={bra} date={date} />
                <Button
                    className={styles.cancel}
                    color="primary"
                >
                    Cancel
                </Button>
            </div>
        </div>

    </RightSidebarTurboNavigation>
  );
};

export { TurboMobile };
