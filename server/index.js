// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cron = require('node-cron');
const scrapeMedGasPrice = require('./GasScraper'); // Import the function

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the routes
app.use('/', routes);

// Call the scraper function
scrapeMedGasPrice();

cron.schedule('*/30 * * * *', scrapeMedGasPrice);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
