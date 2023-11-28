
const mongoose = require('mongoose');
require('dotenv').config();

const Chair = require('../models/Chair');

const {chairs} = require('../data/data.js');

chairs.forEach((chair)=>{
  const chair_object = new Chair({name:chair.name, alt:chair.alt, img:chair.img, type:chair.type, price:chair.price});
  chair_object.save().then((result)=>{
    console.log(`Object inserted: ${result._id}`);
  });
});


mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
  })
  .catch((err)=>{
    console.log(err);
  });

