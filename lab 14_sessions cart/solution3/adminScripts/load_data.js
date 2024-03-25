
const mongoose = require('mongoose');
require('dotenv').config();

const Chair = require('../models/Chair').Chair;


const {chairs} = require('../data/data.js');

mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
    addDataIntoDB();
  })
  .catch((err)=>{
    console.log(err);
  });


const addDataIntoDB = () => {
  chairs.forEach((chair)=>{
    const chairObject = new Chair({
            name: chair.name, 
            type: chair.type, 
            alt: chair.alt, 
            img: chair.img, 
            price: chair.price
          });
    chairObject.save()
          .then((result) => {
            console.log(`Object stored to db: ${result._id}`);
          })
          .catch((err) => {
            console.log(err);
          })
  });
}
