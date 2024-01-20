const express = require('express');
const router = express.Router();
const { MedGasPriceModel } = require('../models/GasPrice');

// Define a route to fetch gas prices
router.get('/api/gas-prices', async (req, res) => {
  try {
    const gasPrices = await MedGasPriceModel.find().sort({ timestamp: 'asc' });
    res.json(gasPrices);
  } catch (error) {
    console.error('Error fetching gas prices:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
