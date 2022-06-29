import { NextApiHandler } from "next";
import puppeteer from "puppeteer";
import sleepUtil from "./utils";

const Handler: NextApiHandler = async (_req, res) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000/');
  await page.emulateMediaType('screen');
  await sleepUtil(1000);

  // Create PDF Buffer
  const buffer = await page.pdf({ format: 'a4',  printBackground: true })

  // Return pdf buffer to caller.
  res.end(buffer) 

  // Close browser **after** we returned the PDF to the caller.
  await browser.close()
}

export default Handler;
