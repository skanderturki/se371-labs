
const mongoose = require('mongoose');
require('dotenv').config();

const Chair = require('../models/Chair');

const {chairs} = require('../data/data.js');

chairs.forEach((chair)=>{
 ///.....Add your code here
});


mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
  })
  .catch((err)=>{
    console.log(err);
  });

