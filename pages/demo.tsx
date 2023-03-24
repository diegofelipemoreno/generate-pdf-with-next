import type { NextPage } from 'next'

import Page from '../components/Page'
import ComboChart from '../components/ComboChart';

import {CategoryScale} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Chart from 'chart.js/auto';

import ComboChartTwo from '../components/ComoChartTwo';
import SingleChart from '../components/SingleChart';
import SingleChartTwo from '../components/SingleChartTwo';

Chart.register(CategoryScale);
//Chart.register(ChartDataLabels);


const Home: NextPage = () => {
  return (
    <>
      <Page>
        <h1>CHART JS POC</h1>

        <h2>Chart JS lines chart</h2>
        <ComboChart />
        <br/>
        <br/>
        <br/>
        <ComboChartTwo/>
      </Page>
      <Page>
        <SingleChart />
        <br/>
        <br/>
        <br/>
        <SingleChartTwo />
      </Page>
    </>
  )
}

export default Home
