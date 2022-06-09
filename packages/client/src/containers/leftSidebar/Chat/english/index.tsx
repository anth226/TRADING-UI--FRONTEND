import React, { FC } from 'react';
import styles from '../styles.module.scss';
import telegram from '../../../../../../libs/assets/images/tellegram.svg';

interface Props {
  isMobile?: boolean;
}

const English: FC<Props> = ({

  isMobile,
}) => (
  <div>
    <div className={styles.container}>
      <div className={styles.circle_left}>J</div>
      <div className={styles.left}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </div>
    </div>

    <div className={styles.container}>

      <div className={styles.right}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    <div className={isMobile ? styles.message_mob : styles.message}>
      Message
      <img src={telegram} alt="icon" />
    </div>

  </div>
);

export default English;
