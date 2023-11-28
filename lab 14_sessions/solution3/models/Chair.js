const mongoose = require("mongoose");

const chairSchema = mongoose.Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  alt: {type: String},
  img: {type: String},
  price: {type: Number}
});


const typesMap = new Map();
typesMap.set("0", "");
typesMap.set("1", "Mobile office chair");
typesMap.set("2", "Stand chair");
typesMap.set("3", "Static chair");
typesMap.set("4", "Gaming chair");

const Chair = mongoose.model("Chair", chairSchema);

module.exports = { Chair, typesMap};  