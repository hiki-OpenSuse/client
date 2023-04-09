import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const LineChartComponent = (props: any) => {
    const {data} = props

    const options = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
    };

    const value = {
        labels: data[0].price_chart_data.map((element: any) => moment(element[0]).format('DD.MM.YY')),
        datasets: [
            {
                label: data[0].name.charAt(0).toUpperCase() + data[0].name.slice(1),
                data: data[0].price_chart_data.map((element: number[])  => (element[1])),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line options={options} data={value} width='100%' height='20%' />;
}
export default LineChartComponent