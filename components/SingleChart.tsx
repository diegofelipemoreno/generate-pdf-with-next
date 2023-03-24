import React from 'react';
import { Bar, Line } from "react-chartjs-2";
import { newDateRange } from '../utils';

const SingleChart = () => {
    const data = {
        labels: newDateRange('2023-02-23', '2023-03-10'),
        datasets: [
            {
              type: 'line',
              label: 'Views',
              backgroundColor: '#006bb4',
              borderColor: '#006bb4',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 4,
              data: [15, 40, 52, 75, 18, 15, 40, 52, 75, 18, 15, 40, 52, 75, 18, 15, 40, 52, 75, 18,],
              yAxisID: 'y',
            },
            {
              type: 'line',
              label: 'Inspections',
              backgroundColor: '#951572',
              borderColor: '#951572',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 4,
              data: [25, 10, 32, 45, 28, 55, 30, 12, 25, 38, 55, 70, 22, 15, 38, 55, 20, 32, 15, 28,],
              yAxisID: 'y1',
            },
            {
              type: 'line',
              label: 'Conversions',
              backgroundColor: '#d37500',
              borderColor: '#d37500',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 4,
              data: [15, 19, 42, 25, 8, 52, 20, 2, 15, 28, 35, 20, 12, 35, 28, 45, 20, 12, 15, 18,],
              yAxisID: 'y2',
            }
        ]
    };

    const options = {
      responsive: true,
      interaction: {
        mode: 'index' as const,
        intersect: false,
      },
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Multi Axis',
        },
      },
      scales: {
        y: {
          type: 'linear' as const,
          display: true,
          position: 'right' as const,
          ticks: {
            // For a category axis, the val is the index so the lookup via getLabelForValue is needed
            callback: (value) => {
              // Hide every 2nd tick label
              return `${value}k`;
            },
          }
        },
        y1: {
          type: 'linear' as const,
          display: false,
          position: 'right' as const,
          grid: {
            drawOnChartArea: false,
          },
        },
        y2: {
          type: 'linear' as const,
          display: false,
          position: 'right' as const,
          grid: {
            drawOnChartArea: false,
          },
        },
      },
    };

  return (
    <Line width="500" height="200" data={data} options={options}/>
  )
};

export default SingleChart;
