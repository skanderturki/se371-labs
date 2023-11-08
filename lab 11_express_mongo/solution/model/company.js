const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
  code: { type: String, required: true},
  name: { type: String, required: true},
  address: String,
  description: String,
  capital: Number,
  owner: String
});

module.exports = mongoose.model('Company', companySchema);