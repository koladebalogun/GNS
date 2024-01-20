// db.js

const mongoose = require('mongoose');

const medGasPriceSchema = new mongoose.Schema({
  value: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const MedGasPriceModel = mongoose.model('MedGasPrice', medGasPriceSchema);

module.exports = {
  MedGasPriceModel,
};
