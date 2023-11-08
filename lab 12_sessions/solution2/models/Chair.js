const mongoose = require("mongoose");

const chairSchema = mongoose.Schema({
  name: {type: String, required: true},
  alt: {type: String},
  img: {type: String},
  type: {type: String, required: true},
  price: {type: Number}
});

const typesMap = new Map();

typesMap.set("1", "Mobile office chair");
typesMap.set("2", "Stand chair");
typesMap.set("3", "Static chair");
typesMap.set("4", "Gaming chair");

const Chair = mongoose.model("Chair", chairSchema);

module.exports = {Chair, typesMap};
