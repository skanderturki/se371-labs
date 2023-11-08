const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const chairTypesMap = require('./data/chairtypes');

require('dotenv').config();

const Chair = require('./models/Chair');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// Folder containing static resources (css, img, etc...)
app.use(express.static('public'));

// Set up the template engine
app.set("view engine", "ejs");

// Homepage
app.get('/', (request, response) => {
  Chair.find()
    .then((result) => {
      response.render('index', {chairs: result});
    })
    .catch((err) => {
      console.log(err);
      response.status(422).json({error: err});
    });

});

app.post('/', (request, response) => {
  let chairtype = null;
  if(request.body != null && request.body != undefined) {
    if(request.body.chairtype != null && request.body.chairtype != undefined) {
      chairtype = request.body.chairtype; 
    }
  }

  const criteria = chairtype == null || chairTypesMap.get(chairtype) == "All"? 
      {}: {type: chairTypesMap.get(chairtype)};
  Chair.find(criteria)
    .then((result) => {
      response.render('index', {chairs: result});
    })
    .catch((err) => {
      console.log(err);
      response.status(422).json({error: err});
    });

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

