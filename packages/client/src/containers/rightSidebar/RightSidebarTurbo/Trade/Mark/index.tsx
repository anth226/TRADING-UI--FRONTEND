/* eslint-disable */
import React, { FC } from 'react';
import styles from './styles.module.scss';
import homic from '../../../../../../../libs/assets/images/mark/homic.svg'

interface Props {
  active: boolean
  id: number
}

const marks:{ [key:number]:{ label:string } } = {
  5: { label: '10x' },
  15: { label: '20x' },
  25: { label: '25x' },
  35: { label: '50x' },
  45: { label: '100x' },
  55: { label: '150x' },
  65: { label: '200x' },
};
const Mark:FC<Props> = ({ active, id }) => (

  <div>
    {active ? (
      <div className={styles.main}><img src={homic} alt='' className={styles.img}/><div className={styles.active}>{marks[id].label}</div></div>)
      :
      (
        <div className={styles.unActive}>{marks[id].label}</div>
      )}
  </div>
);

export default Mark;
