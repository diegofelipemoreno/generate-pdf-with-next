import React from 'react';

import { Bar } from "react-chartjs-2";
import {newDateRange} from '../utils';

const ComboChartTwo = () => {
    const data: any = {
        labels: newDateRange('2023-02-23', '2023-03-06'),
        datasets: [
            {
                type: 'bar',
                label: 'Return on Ad Spend (ROAS)',
                backgroundColor: '#6e37cd',
                data: [5, 20, 4, 8, 5, 2, 4, 8, 12, 4, 14, 14, 18, 5, 14, 7, 12, 9, 2],
                yAxisID: 'y',
                barThickness: 24,
                borderColor: 'white',
                borderWidth: 2,
              }
        ],
    };

    const options: any = {
        responsive: true,
        interaction: {
          mode: 'index' as const,
          intersect: false,
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                },
            },
            y: {
              type: 'linear',
              display: true,
              position: 'right',
              max: 25,
              ticks: {
                color: '#6e37cd',
                callback: (value: string) => {
                    return `$${value}`;
                  },
              }
            },
          }
    };

  return (
    <Bar width="600" height="300" data={data} options={options}/>
  )
};

export default ComboChartTwo;
