/* eslint-disable */
import React from 'react';
import styles from './styles.module.scss'
import {Doughnut} from 'react-chartjs-2';
import {
    BarElement,

    Chart as ChartJS,
    Legend,
    registerables,
    Title,
    Tooltip
} from 'chart.js';

ChartJS.register(
    BarElement,
    Title,
    Tooltip,
    Legend
);
ChartJS.register(...registerables);

const DATA_COUNT = 30
const Number = { count: DATA_COUNT, min: 0, max: 30 }
const DATA_COUNT1 = 25
const Number1 = { count: DATA_COUNT1, min: 0, max: 30 }

export const dato = {
    labels: [
        'This Month',
        'Last Month'
    ],
    datasets: [
        {
            label: 'This Month',
            data: [Number.count, Number.max - Number.count],
            backgroundColor: [
                'rgba(135, 21, 163, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '85%',
            circumference: 270,
            borderRadius: 20,
            radius: 30,
        },
        {
            label: 'Last Month',
            data: [Number1.count, Number1.max -Number1.count],
            backgroundColor: [
                'rgba(19, 101, 200, 1)',
                'rgba(25, 34, 53, 1)',
            ],
            borderColor: [
                'transparent'
            ],
            borderWidth: 1,
            cutout: '85%',
            circumference: 270,
            borderRadius: 20,
            radius: 40
        },
    ],
};
const options = {

   maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
        legend: {
            display: true,
            position: 'right' as const,
        },
        title: {
            display: true,
            align: 'center' as const,
            text: 'Monthly Registrations',
            color: 'rgba(255, 255, 255, 1)',
            font: {
                family: 'Conthrax',
                weight: 'bold',
                size: 10,
            },
        },
        chart_center_label: {
            fontFamily: 'Conthrax',
            fontSize: 8,
        }
    },
    responsive: true,
};

const DoughnutS = () => {
    return (
        <div className={styles.wrap}>
            <Doughnut
                data={dato}
                options={options}
                plugins={[
                    {
                        id: 'chart_center_label',
                        beforeDraw(chart) {
                            const { width } = chart;
                            const { height } = chart;
                            const { ctx } = chart;
                            ctx.restore();
                            // ctx.font = options.plugins.chart_center_label.fontSize  + options.plugins.chart_center_label.fontFamily;
                            ctx.textBaseline = 'top';
                            const  textA   = DATA_COUNT;
                            const textAX = Math.round((width - ctx.measureText(String(textA)).width) / 4 +13);
                            const textAY = height / 2 +2;
                            // ctx.fillStyle = 'rgba(19, 101, 200, 1)';
                            ctx.fillStyle =  'rgba(19, 101, 200, 1)';
                            ctx.fillText(String(textA), textAX, textAY);

                            const  textB   = DATA_COUNT1;
                            const textBX = Math.round((width - ctx.measureText(String(textB)).width) / 4 +13);
                            const textBY = height / 2 +17;
                            ctx.fillStyle = 'rgba(135, 21, 163, 1)';
                            ctx.fillText(String(textB), textBX, textBY);
                            ctx.save();
                        },
                    },
                ]}
            />
        </div>
    );
};

export default DoughnutS;
