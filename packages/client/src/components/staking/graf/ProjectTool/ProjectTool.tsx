/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss'
import {Line} from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { none } from 'ramda';
ChartJS.register(...registerables);

const ProjectTool = () => {


  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    responsive: true,

  };
  const labels = ['-50%', '0%', '50%', '','',];
  const data = {
    labels: labels,
    plugins: {
      legends: {
        display: false
      }
    },
    datasets: [{
      label: '',
      backgroundColor:'rgba(0, 156, 200, 0.3)',
      data: [ 0.8 ,1, -1, -3],
      fill: true,
      borderColor: 'rgba(0, 156, 200, 1)',
      tension: 0.6
    }]
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>POJECT POOL PNL BASEDOM SPOT</div>
      <div className={styles.title_}>PRICE CHANGE</div>
        <Line
          data={data}
          options={options}
        />
    </div>
  );
};

export default ProjectTool;

