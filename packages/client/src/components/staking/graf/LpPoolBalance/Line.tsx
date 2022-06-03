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

const Line = () => {

  // const options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //     },
  //   },
  //   responsive: true,
  //   interaction: {
  //     mode: 'index' as const,
  //     intersect: false,
  //   },
  //   scales: {
  //     x: {
  //       stacked: true,
  //     },
  //     y: {
  //       stacked: true,
  //     },
  //   },
  // };
  const labels = [''];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [320],
        backgroundColor: 'rgb(0, 156, 205, 1)',
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [80],
        backgroundColor: 'rgb(0, 156, 205,0.3)',
        stack: 'Stack 0',
      },
    ],
  };

  return (
    <div className={styles.wrap}>
      <Bar
        data={data}
      />
      <div>
        Web Technology Skill Proficiency
        ExpertIntermediate
      </div>
    </div>
  );
};

export default Line;







