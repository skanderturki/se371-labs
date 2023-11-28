const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const {Chair, typesMap} = require("./models/Chair");

const app = express();

// Folder containing static resources (css, img, etc...)
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set up the template engine
app.set("view engine", "ejs");

// Homepage
app.get('/', (request, response) => {
  Chair.find()
    .then((result) => {
      response.render('index', {chairs: result});
    })
    .catch((err) => {
      response.status(422).render('index', {chairs: null});
    })

});

app.post('/', (request, response) => {
  let criteria = {};
  const chairtype = request.body.chairtype;
  if(chairtype){
    if( chairtype != "0") {
      const type = typesMap.get(chairtype);
      if(type) {
        criteria = {type: type};
      }
    }
  } 
  console.log("chairtype: " + chairtype);
  Chair.find(criteria)
    .then((result) => {
      response.render('index', {chairs: result});
    })
    .catch((err) => {
      response.status(422).render('index', {chairs: null});
    })

});

// about
app.get('/about', (request, response) => {
  response.render('about');
});

// Web API endpoint thbat serves chairs data as json
app.get('/v1/chairs', (request, response) => {
  response.json(chairs);
});

// Handle any unrecognized routes
app.use((request, response) => {
  response.status(404).render('404');
});



mongoose.connect(process.env.MONGO_URI)
  .then((result)=>{
    console.log(`Connected to the database...`);
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err)=>{
    console.log(err);
  });

