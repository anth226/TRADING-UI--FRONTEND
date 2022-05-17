/* eslint-disable */
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import arrow from '../../../../../libs/assets/images/arrow-back.svg';
import { FontIcon, FontIconName } from '@option-blitz/libs/components/inputs/FontIcon';

interface Props {
  onBack?: () => void;
  isMobile?: boolean;
}
const data = [
  {
    id: 1,
    question: 'How can I close my account?',
    answer: '',
  },
  {
    id: 2,
    question: 'I have a virtual card that I can’t verified. What should I do?',
    answer: '',
  },
  {
    id: 3,
    question: 'How do I change my home address?',
    answer: '',
  },
  {
    id: 4,
    question: 'How do I unsubscribe from emails?',
    answer: 'When you sigh in to the site or app, you can click the “Forgot your password?” link and enter the email address you used for registration. You will get an email message with link for setting a new password',
  },
  {
    id: 5,
    question: 'I forgot my password. What should I do?',
    answer: 'When you sigh in to the site or app, you can click the “Forgot your password?” link and enter the email address you used for registration. You will get an email message with link for setting a new password',
  },
  {
    id: 6,
    question: 'Inactivity fee. Do you have fees?',
    answer: '',
  },
  {
    id: 7,
    question: 'How do I change my phone number?',
    answer: '',
  },
  {
    id: 8,
    question: 'How can I secure my account?',
    answer: '',
  },
];
const Info: FC<Props> = ({
                           onBack,
                           isMobile,
                         }) => {


  const [activeItem, setActiveItem] = useState(-1)

  const handlerChange = (index: number) => {
   if(activeItem === index){
     setActiveItem(-1)
   }
   else {
     setActiveItem(index)
   }
  }
  return (

    <div className={styles.wrap}>
      <div className={styles.title_wrap}>
        <p className={styles.title}>HELP</p>
        <button onClick={onBack} className={styles.arrow_wrap}>
          <img src={arrow} alt='back' />
        </button>
      </div>

      {data.map((item, index) =>(
        <div key={item.id} onClick={()=> handlerChange(index)}>
          <div className={styles.main}>
            <div className={styles.question}>{item.question}</div>
            <div><FontIcon name={FontIconName.SolidArrow} size={12} /></div>
          </div>
            <div className={activeItem===index ? styles.answer: styles.none}>{item.answer}</div>
        </div>
      ))}

    </div>
  );
};
export { Info };
