import React from 'react';
import { Line } from "react-chartjs-2";
import { newDateRange, newTimeRange } from '../utils';

const SingleChartTwo = () => {
    const data: any = {
        labels: newTimeRange('2023-01-12', '2024-01-20', 'months'),
        datasets: [
            {
              type: 'line',
              label: 'Views',
              backgroundColor: '#1f774e',
              borderColor: '#1f774e',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 4,
              data: [15, 40, 52, 75, 18, 15, 40, 52, 75, 18, 15, 40, 52, 75, 18, 15, 40, 52, 75, 18,],
              yAxisID: 'y',
            },
            {
              type: 'line',
              label: 'Inspections',
              backgroundColor: '#000000',
              borderColor: '#000000',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 4,
              data: [25, 30, 32, 45, 28, 55, 30, 12, 25, 38, 55, 70, 22, 15, 38, 55, 20, 32, 15, 28,],
              yAxisID: 'y1',
            },
        ]
    };

    const options: any = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart - Multi Axis',
          },
        },
        scales: {
          x: {
            grid: {
                drawOnChartArea: false,
            },
          },
          y: {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            min: 0,
            ticks: {
                // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                callback: (value: string) => {
                  // Hide every 2nd tick label
                  return `${value}%`;
                },
                color: '#000000',
              }
          },
          y1: {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            max: 100,
            ticks: {
                // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                callback: (value: string) => {
                  // Hide every 2nd tick label
                  return `$${value}`;
                },
                color: '#1f774e',
              },
              grid: {
                drawOnChartArea: false,
            },
          },
        },
      };
console.log(data, "datadatadata");
  return (
    <Line width="500" height="200" data={data} options={options}/>
  )
};

export default SingleChartTwo;
