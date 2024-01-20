require('dotenv').config();

const puppeteer = require('puppeteer');
const cron = require('node-cron');
const mongoose = require('mongoose');
const {MedGasPriceModel} = require('./models/GasPrice')

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const scrapeMedGasPrice = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto('https://snowtrace.io/');
    await page.waitForSelector('.new-line-xxs');

    const medGasPrice = await page.$eval('.new-line-xxs', (element) => element.innerText.trim());

    // Save the scraped data to MongoDB
    const dataToSave = new MedGasPriceModel({ value: medGasPrice });

    try {
      const savedData = await dataToSave.save();
      console.log(`Med Gas Price saved to MongoDB: ${savedData}`);
    } catch (error) {
      console.error('Error saving to MongoDB:', error.message);
    }


    console.log(`Med Gas Price: ${medGasPrice}`);

    await browser.close();
  } catch (error) {
    console.error('Error:', error.message);
  }
};

console.log('Scraper started. Press Ctrl+C to stop.');

module.exports = scrapeMedGasPrice;
