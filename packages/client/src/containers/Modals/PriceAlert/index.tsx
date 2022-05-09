/* eslint-disable */
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

import { DefaultSelect, OptionItem } from '@option-blitz/libs/components/inputs/DefaultSelect';
import { OnChangeValue } from 'react-select';
import { timeOptionsMock } from '@option-blitz/libs/mock/rightSidebar/timeSelectOption';
import { TextInput } from '@option-blitz/libs/components/inputs/TextInput';
import Button from '@option-blitz/libs/components/inputs/Button';
import { Checkbox } from '@option-blitz/libs/components/inputs/Checkbox';
interface Props {
  active?: boolean
  setActive?: any
  onChange?: (e: OnChangeValue<OptionItem, false>) => void
  className?: string
}


const PriceAlert = ({active, setActive }:Props) => {

  const close = () => {
    setActive(false);
  };

  const usd = 'EUR/USD'
  const value  = '+10.06 to 1.3456'

  return (
    <div className={active ? styles.background : styles.modalInviseble}>
      <div className={styles.modal}>
        <div className={styles.alert}>
          <div className={styles.pointer}>
            <FontIcon name={FontIconName.Statistics} size={15} className={styles.iconStatistic} />
            <div>PRICE ALERT!</div>
          </div>
          <button type='button' onClick={close}>
            <FontIcon name={FontIconName.Close} size={15} />
          </button>
        </div>
        <div className={styles.main}>
          <div className={styles.flag}><svg width="108" height="101" viewBox="0 0 108 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M69.1449 45.7151L69.1449 45.7152C64.7644 63.5497 46.927 74.4876 29.2398 70.011L29.2396 70.011C11.5795 65.5405 0.910881 47.4216 5.28825 29.6071L69.1449 45.7151ZM69.1449 45.7151C73.5206 27.8991 62.8534 9.77761 45.1871 5.30703L69.1449 45.7151ZM45.1869 5.30698C27.504 0.831389 9.66723 11.7705 5.28848 29.6062L45.1869 5.30698Z" fill="#0052B4" stroke="#1A1D2A" stroke-width="7.38683"/>
            <path d="M37.9298 48.9523C33.6157 48.9523 29.8699 46.5068 28.0012 42.9245H37.9298V39.48H26.8818C26.7957 38.9203 26.7355 38.3433 26.7355 37.7578C26.7355 37.1723 26.7958 36.5953 26.8818 36.0356H37.9298V32.5911H28.0012C29.8699 29.009 33.607 26.5633 37.9298 26.5633C40.7112 26.5633 43.2515 27.5795 45.2062 29.2586L48.2632 26.219C45.5248 23.7648 41.8995 22.2578 37.9298 22.2578C31.1874 22.2578 25.461 26.572 23.334 32.5911H17.2632V36.0356H22.5332C22.4643 36.604 22.4299 37.1723 22.4299 37.7578C22.4299 38.3433 22.4643 38.9117 22.5332 39.48H17.2632V42.9245H23.334C25.461 48.9436 31.1874 53.2578 37.9298 53.2578C41.8995 53.2578 45.5248 51.7508 48.2632 49.2967L45.2062 46.2483C43.2515 47.9275 40.7112 48.9523 37.9298 48.9523Z" fill="white"/>
            <path d="M103.145 71.7151L103.145 71.7152C98.7644 89.5497 80.927 100.488 63.2398 96.011L63.2396 96.011C45.5795 91.5405 34.9109 73.4216 39.2883 55.6071L103.145 71.7151ZM103.145 71.7151C107.521 53.8991 96.8534 35.7776 79.1871 31.307L103.145 71.7151ZM79.1869 31.307C61.504 26.8314 43.6672 37.7705 39.2885 55.6062L79.1869 31.307Z" fill="#0052B4" stroke="#1A1D2A" stroke-width="7.38683"/>
            <path d="M71.4797 93.5763C87.6156 93.5763 100.696 80.2974 100.696 63.917C100.696 47.5367 87.6156 34.2578 71.4797 34.2578C55.3439 34.2578 42.2632 47.5367 42.2632 63.917C42.2632 80.2974 55.3439 93.5763 71.4797 93.5763Z" fill="#F0F0F0"/>
            <path d="M70.21 63.9179H100.697C100.697 61.2409 100.345 58.6476 99.6903 56.1807H70.21V63.9179Z" fill="#D80027"/>
            <path d="M70.21 48.4443H96.4085C94.6201 45.4816 92.3333 42.8629 89.667 40.707H70.21V48.4443Z" fill="#D80027"/>
            <path d="M71.4803 93.5785C78.3564 93.5785 84.6764 91.1659 89.6672 87.1309H53.2935C58.2842 91.1659 64.6043 93.5785 71.4803 93.5785Z" fill="#D80027"/>
            <path d="M46.5517 79.3925H96.4084C97.8443 77.0141 98.9578 74.4143 99.6902 71.6553H43.27C44.0024 74.4143 45.1159 77.0141 46.5517 79.3925Z" fill="#D80027"/>
            <path d="M55.7968 38.8895H58.4593L55.9828 40.716L56.9288 43.6714L54.4523 41.8449L51.9759 43.6714L52.793 41.1182C50.6125 42.9621 48.7013 45.1224 47.1264 47.5294H47.9795L46.403 48.692C46.1574 49.1079 45.9219 49.5305 45.6961 49.9592L46.4489 52.3112L45.0445 51.2754C44.6953 52.0262 44.376 52.794 44.089 53.5778L44.9184 56.1693H47.9795L45.5029 57.9957L46.4489 60.9511L43.9725 59.1246L42.489 60.2188C42.3406 61.4304 42.2632 62.6645 42.2632 63.917H71.4797C71.4797 47.5368 71.4797 45.6057 71.4797 34.2578C65.7081 34.2578 60.3278 35.9574 55.7968 38.8895ZM56.9288 60.9511L54.4523 59.1246L51.9759 60.9511L52.9219 57.9957L50.4453 56.1693H53.5064L54.4523 53.2139L55.3982 56.1693H58.4593L55.9828 57.9957L56.9288 60.9511ZM55.9828 49.3559L56.9288 52.3112L54.4523 50.4848L51.9759 52.3112L52.9219 49.3559L50.4453 47.5294H53.5064L54.4523 44.574L55.3982 47.5294H58.4593L55.9828 49.3559ZM67.4086 60.9511L64.9322 59.1246L62.4557 60.9511L63.4017 57.9957L60.9251 56.1693H63.9863L64.9322 53.2139L65.878 56.1693H68.9392L66.4626 57.9957L67.4086 60.9511ZM66.4626 49.3559L67.4086 52.3112L64.9322 50.4848L62.4557 52.3112L63.4017 49.3559L60.9251 47.5294H63.9863L64.9322 44.574L65.878 47.5294H68.9392L66.4626 49.3559ZM66.4626 40.716L67.4086 43.6714L64.9322 41.8449L62.4557 43.6714L63.4017 40.716L60.9251 38.8895H63.9863L64.9322 35.9341L65.878 38.8895H68.9392L66.4626 40.716Z" fill="#0052B4"/>
          </svg></div>
          <div className={styles.title}>{usd} is up <div className={styles.value}>{value}</div></div>
          <div className={styles.hours}>in the last 2 hours</div>

          <div className={styles.message}>ALERT MESSAGE</div>
          <div className={styles.border}>
            <div className={styles.description}>
              Hey! Go to binary options and start trading now!
            </div>
          </div>
          <Button className={styles.ok}>OK</Button>
        </div>
      </div>
    </div>

  );
};
export { PriceAlert };
