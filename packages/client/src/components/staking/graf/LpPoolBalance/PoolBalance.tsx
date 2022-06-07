/* eslint-disable */
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

const PoolBalance = () => {

  const labels = [''];
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,

  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [320],
        backgroundColor: 'rgb(0, 156, 205, 1)',
        stack: 'Stack 0',
        barThickness: 120,
      },
      {
        label: 'Dataset 2',
        data: [80],
        backgroundColor: 'rgb(0, 156, 205,0.3)',
        stack: 'Stack 0',
        barThickness: 120,
      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>LP POOL BALANCE, UTILIZATION RATE</div>
      <Bar
        data={data}
        options={options}
        height={10}
      />
    </div>
  );
};

export default PoolBalance;







