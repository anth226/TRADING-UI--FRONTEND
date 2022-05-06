/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { VideoCard } from '@option-blitz/libs/components/leftSidebar/Video';

interface Props {
  onBack?: () => void
  isMobile?: boolean
}

const Video: FC<Props> = ({
  onBack,
  isMobile,
                          }) => {

  const play = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM21.8181 15.0001L10.9091 8.18188V21.8182L21.8181 15.0001Z" fill="#20C2B8"/>\n' +
    '</svg>
  const data = [
    {
      title: 'How to trade binalry options?',
      icon: play
    },
    {
      title: 'How to deposit funds?',
      icon: play
    },
    {
      title: 'Forex, How to start?',
      icon: play,
    },
    {
      title: 'How to trade digital options?',
      icon: play
    },
    {
      title: 'What are options?',
      icon: play
    },
    {
      title: 'How to sell options before expiration?',
      icon: play
    },
    {
      title: 'How you can spend BTC?',
      icon: play,
    },
    ]

  return (
    <div className={isMobile ? styles.wrap_mobile : styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>Video Tutorials</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <svg width='7' height='10' viewBox='0 0 7 10' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path d='M6 1L1.5 5L6 9' stroke='#20C3B9' stroke-width='2' stroke-linecap='round'
                  stroke-linejoin='round' />
          </svg>
          <svg width='7' height='10' viewBox='0 0 7 10' fill='none'
               xmlns='http://www.w3.org/2000/svg'>
            <path d='M6 1L1.5 5L6 9' stroke='#20C3B9' stroke-width='2' stroke-linecap='round'
                  stroke-linejoin='round' />
          </svg>
        </button>
      </div>

      <div className={styles.card_wrap}>
        {data.map((item) => (
          <VideoCard
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
export { Video };
