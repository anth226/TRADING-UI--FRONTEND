/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import tellegram from '../../../../../libs/assets/images/tellegram.svg'

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}

const Chat: FC<Props> = ({
                           onBack,
                           isMobile,
                         }) => {


  return (

    <div className={styles.wrap}>

      <div className={styles.chat}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>CHAT</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <img src={arrow} alt='back' />
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles.circle_left}>J</div>
        <div className={styles.left}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </div>

      <div className={styles.container}>

        <div className={styles.right}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* <div className={styles.circle_right}>J</div> */}
      </div>

      <div className={styles.container}>
        <div className={styles.circle_left}>J</div>
        <div className={styles.left}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </div>
      </div>
      </div>

      <div className={styles.message}>
        Message
        <img src={tellegram} alt='icon' />
      </div>

    </div>
  );
};
export { Chat };
