
const mongoose = require('mongoose');
require('dotenv').config();

const Chair = require('../models/Chair');

const {chairs} = require('../data/data.js');

chairs.forEach((chair)=>{
  const chairObject = new Chair({
                                name:chair.name, 
                                alt:chair.alt, 
                                img:chair.img,
                                type:chair.type,
                                price:chair.price
                              });
  chairObject.save()
    .then((result) => {
      console.log(`A new object was stored: ${result._id}`);
    })
    .catch((err) => {
      console.log(err);
    });
});

mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
  })
  .catch((err)=>{
    console.log(err);
  });

