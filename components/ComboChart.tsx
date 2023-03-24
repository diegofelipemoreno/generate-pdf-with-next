import React, { useRef } from 'react';

import { BarControllerChartOptions, BarControllerDatasetOptions, ChartData, ChartOptions, ChartType, DefaultDataPoint } from 'chart.js';
import moment from 'moment';
import { Bar, ChartProps } from "react-chartjs-2";
import {months, newDate, newDateRange, Utils} from '../utils';


const DATA_COUNT = 10;
const labels = [];

for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(newDate(i));
}

const ComboChart = () => {
    const elementRef = useRef();
    const data: ChartData = {
        labels: newDateRange('2023-02-23', '2023-03-05'),
        //labels: [{"first", "second", "third", "4th", "5th"}],
        //labels: months({count: 7}),
        datasets: [
            {
                type: 'line',
                label: 'CPA',
                backgroundColor: '#17793d',
                borderColor: '#17793d',
                fill: false,
                data: [...Array(10)].map(e=>Math.floor(Math.random()*50)),
              },
            {
                type: 'bar',
                label: 'Win Rate',
                backgroundColor: '#2462cd',
                data: [...Array(10)].map(e=>Math.floor(Math.random()*80)),
                yAxisID: 'y1',
                barThickness: 16,
                borderColor: 'white',
                borderWidth: 2,
              }, {
                type: 'bar',
                label: 'Convertions',
                backgroundColor: '#d3810a',
                barThickness: 9,
                borderColor: 'white',
                borderWidth: 2,
                data: [...Array(10)].map(e=>Math.floor(Math.random()*50)),
                yAxisID: 'y2',
              },
        ],
    };


    const options = {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
          },
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'right',
                max: 80,
                ticks: {
                    color: '#17793d',
                  }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'left',
              max: 100,
              ticks: {
                color: '#2462cd',
              }
            },
            y2: {
              type: 'linear',
              display: true,
              position: 'right',
              max: 100,
              ticks: {
                // For a category axis, the val is the index so the lookup via getLabelForValue is needed
                callback: (value) => {
                  // Hide every 2nd tick label
                  return `$${value}`;
                },
                color: '#d3810a',
                //display: false
              }
            },
          }
    };

    const randomize = () => {
        const chart = elementRef.current;

        chart.data.datasets[0].data = [...chart.data.datasets[0].data].reverse();
        chart.data.datasets[1].data = [...chart.data.datasets[1].data].reverse();
        chart.data.datasets[2].data = [...chart.data.datasets[2].data].reverse();

        chart.update();
    }

    const addDataSet = () => {
        const chart = elementRef.current;
        const newDataset = {
            label: "Dataset " + (data.datasets.length + 1),
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            borderWidth: 1,
            data: [...Array(10)].map(e=>Math.floor(Math.random()*50)),
          };

          chart.data.datasets.push(newDataset);
          chart.update();
    }

    const addData = () => {
        const chart = elementRef.current;

        if (chart.data.datasets.length > 0) {
            chart.data.labels = newDateRange('2023-02-23', '2023-03-10');

            for (var index = 0; index < chart.data.datasets.length; ++index) {
                chart.data.datasets[index].data.push(28, 49, 10, 22, 80);
                chart.options = options;
                chart.update();
            }

            console.log(chart);
          }
    }

    return (
        <>
        <button onClick={() => randomize()}>Random</button>
        <button onClick={() => addDataSet()}>Add Data set</button>
        <button onClick={() => addData()}>Add Data</button>
        <Bar ref={elementRef} width="600" height="300" data={data} options={options}/>
        </>

    )
    };

export default ComboChart;
