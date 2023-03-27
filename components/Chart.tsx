import React, {useEffect, useRef} from 'react';

import {Chart} from "chart.js";

const MyChart = () => {
  const ref = useRef(null);

  useEffect(() => {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const config = {
      type: 'line',
      data: data,
      options: {}
    };

    const {current} = ref;

    const myChartObj = new Chart(
      current as any,
      config
    );

    console.log(myChartObj.getVisibleDatasetCount());
  }, []);

  return (
    <canvas className="App" id="chart" ref={ref}></canvas>
  )
};

export default MyChart;
