import type { NextPage } from 'next'
import Image from 'next/image';

import Page from '../components/Page'
import MyChart from '../components/Chart';
import MyPieChart from '../components/PieChart';
import MyBarChart from '../components/BarChart';
import MyBarChartTwo from '../components/BarChartTwo';

const Home: NextPage = () => {
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
      <Page>
        <h1>Generated PDF</h1>
        <p>As you can see you can scroll without issues and select text.</p>

        <h2>Chart JS lines chart</h2>
        <MyChart />

        <h2>Image</h2>
        <Image
            src="/profile.jpg"
            height={225}
            width={300}
            alt="Y"
            />

        <h2>Bar Chart</h2>
        <MyBarChart />
      </Page>
      <Page>
        <h1>Page 2</h1>
        <p>As you can see you can scroll without issues and select text.</p>

        <h2>Chart JS Pie chart</h2>
        <MyPieChart />
      </Page>

      <Page>
        <h1>Page 3</h1>
        <p>As you can see you can scroll without issues and select text.</p>


        <h2>Graphic Chart</h2>
        <MyBarChartTwo />
      </Page>
    </>
  )
}

export default Home
