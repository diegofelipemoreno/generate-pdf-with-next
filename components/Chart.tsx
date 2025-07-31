import React, { useEffect, useRef } from 'react';
import {
  Chart,
  ChartConfiguration,
  ChartData,
  ChartOptions,
  registerables
} from 'chart.js';

Chart.register(...registerables);

const MyChart = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

    const data: ChartData<'line'> = {
      labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30],
      }]
    };

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data,
      options: {} as ChartOptions<'line'>
    };

    const canvas = ref.current;

    // Destroy previous chart instance if exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    if (canvas) {
      chartInstanceRef.current = new Chart(canvas, config);
      console.log(chartInstanceRef.current.getVisibleDatasetCount());
    }

    // Cleanup on component unmount
    return () => {
      chartInstanceRef.current?.destroy();
      chartInstanceRef.current = null;
    };
  }, []);

  return (
    <canvas className="App" id="chart" ref={ref}></canvas>
  );
};

export default MyChart;
