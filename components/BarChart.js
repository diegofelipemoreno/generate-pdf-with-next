import React from 'react';
import { Bar } from "react-chartjs-2";

const MyBarChart = () => {
    const data = {
        labels: ["first", "second", "third", "4th", "5th"],
        datasets: [
            {
            label: "First set",
            data: [1, 2, 4, 8, 20],
            backgroundColor: "blue"
            }
        ]
    };

    const options = {
        responsive: false,
        scales: {
            xAxes: [
            {
                max: 50,
                gridLines: {
                display: true,
                drawBorder: false,
                borderDash: [3, 3],
                zeroLineColor: "blue"
                },
                categoryPercentage: 0.7,
                barPercentage: 0.9,
                ticks: {
                beginAtZero: true
                }
            }
            ],
            yAxes: [
            {
                max: 50,
                display: false,
                gridLines: {
                display: false,
                zeroLineColor: "transparent"
                },
                ticks: {
                beginAtZero: true
                }
            }
            ]
        }
    };

  return (
    <Bar width="200" height="200" data={data} options={options} />
  )
};

export default MyBarChart;
