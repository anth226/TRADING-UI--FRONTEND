/* eslint-disable */
/* @ts-ignore */
import React from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import styles from './styles.module.scss'
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(...registerables);

const Referals = () => {

  const labels = ['BINARY', 'TOUCH', 'NO TOUCH','DOUBLE TOUCH', 'DOUBLE NO TOUCH'];
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales:{
      x:{
        ticks:{
          color: 'rgb(255,255,255)'
        },
        grid:{ color: 'rgba(210,210,210,0.06)' },

      },

      y:{
        ticks:{ color: 'rgb(255,255,255)' } ,
        grid:{ color: 'rgba(210,210,210,0.06)' }
      }
    },
    responsive: true,

  };
  const data = {
    labels:labels,
    datasets: [
      {
        label: 'test',
        data: [30, 90, 70, 20, 40],
        backgroundColor: 'rgba(0,156,205,0.45)',
        borderWidth:2,
        borderColor: 'rgb(0, 156, 205, 1)',
        borderSkipped: false as const,
        fill: true,
        barThickness: 40,

      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>REFERALS TRADING VOLUME BY PRODUCT (LAST 30 DAYS)</div>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
};

export default Referals;
