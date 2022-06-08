/* eslint-disable */
import styles from "./styles.module.scss";
import {Doughnut} from "react-chartjs-2";
import React from "react";
import {BarElement, Chart as ChartJS, Legend, registerables, Title, Tooltip} from "chart.js";


ChartJS.register(
    BarElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(...registerables);

export const data = {
    labels: [
        'Binary Options',
        'Touch Options',
        'No-Touch Options',
        'Double No-Touch Options',
        'American Options',
        'American Options',
         'Last Month',
    ],
    datasets: [
        {
          data:[0, 0, 0, 0, 0, 0,0 ],
            backgroundColor: [
                'rgba(212, 175, 54, 1)',
                'rgba(89, 100, 138, 1)',
                'rgba(135, 21, 163, 1)',
                'rgba(8, 154, 110, 1)',
                'rgba(176, 110, 36, 1)',
                'rgba(19, 98, 195, 1)',
                'rgba(83, 18, 160, 1)',
            ],
            borderColor: [
                'transparent'
            ],
        },
        {
            label: 'Binary Options',
            data: [80,  20],
            backgroundColor: [
                'rgba(212, 175, 54, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '65%',
            rotation: 90,
            borderRadius: 20,
            radius: 45,
        },
        {
            label: 'Touch Options',
            data: [75, 25],
            backgroundColor: [
                'rgba(89, 100, 138, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '70%',
            rotation: 95,
            borderRadius: 20,
            radius: 60
        },
        {
            label: 'Double No-Touch Options',
            data: [75, 25],
            backgroundColor: [
                'rgba(135, 21, 163, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '80%',
            rotation: 100,
            borderRadius: 20,
            radius: 75
        },
        {
            label: 'Last Month',
            data: [75, 25],
            backgroundColor: [
                'rgba(8, 154, 110, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '80%',
            rotation: 90,
            borderRadius: 20,
            radius: 90
        },
        {
            label: 'American Options',
            data: [75, 25],
            backgroundColor: [
                'rgba(176, 110, 36, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '80%',
            rotation: 90,
            borderRadius: 20,
            radius: 105
        },
        {
            label: 'American Options',
            data: [75, 25],
            backgroundColor: [
                'rgba(19, 98, 195, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '80%',
            rotation: 130,
            borderRadius: 20,
            radius: 120
        },
        {
            label: 'Last Month',
            data: [75, 25],
            backgroundColor: [
                'rgba(83, 18, 160, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '80%',
            rotation: 94,
            borderRadius: 20,
            radius: 135
        },

    ],
};

const options = {

    maintainAspectRatio: false,

    plugins: {
        legend: {
            display: true,
            position: 'right' as const,
            borderRadius: 10,
        },
        chart_center_label: {
            fontFamily: 'Conthrax',
            fontSize: 8,
        }
    },
    responsive: true,
};

export const DoughnutB = () => {
    return (
        <div className={styles.wrap}>
            <Doughnut
                data={data}
                options={options}
                plugins={[
                    {
                        id: 'chart_center_label',
                        beforeDraw(chart) {
                            const { width } = chart;
                            const { height } = chart;
                            const { ctx } = chart;
                            ctx.restore();

                            const  textA   = '$1100.00';
                            const textAX = Math.round((width - ctx.measureText(String(textA)).width) / 3 -2);
                            const textAY = height / 2 - 5;
                            ctx.fillStyle =  'rgba(255, 255, 255, 1)';
                            ctx.fillText(String(textA), textAX, textAY);

                            const  textB   = '100%';
                            const textBX = Math.round((width - ctx.measureText(String(textB)).width) / 3 +3);
                            const textBY = height / 2 +12;
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.53)';
                            ctx.fillText(String(textB), textBX, textBY);
                            ctx.save();
                        },
                    },
                ]}
            />
        </div>
    );
};

export default DoughnutB;