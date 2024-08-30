const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: {type: String, unique: true, required: true},
  name: {type: String, required: true},
  description: {type: String},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', productSchema);