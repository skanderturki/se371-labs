const mongoose = require("mongoose");

const chairSchema = mongoose.Schema({
  name: {type: String, required: true},
  alt: {type: String},
  type: {type: String, required: true},
  img: {type: String},
  price: {type: Number}
});

module.exports = mongoose.model('Chair', chairSchema);