/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss'
// @ts-ignore
import { BarChart } from "react-d3-components";

const LineGraf = () => {

  const data = [
    {
      label: "Expert",
      values: [
        { x: "name", y: 320 },
      ]
    },
    {
      label: "Intermediate",
      values: [
        { x: "name", y: 100 },
      ]
    },

  ];

  return (
    <div>
      <div className="App">
        <BarChart
          data={data}
          width={400}
          height={400}
          margin={{
            top: 10,
            bottom: 50,
            left: 50,
            right: 10
          }}
        />


        <div id="five_day_table">
          <h3>Web Technology Skill Proficiency</h3>
          <span className="one">Expert</span>
          <span className="two">Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default LineGraf;
