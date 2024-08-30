const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const Company = require("./model/company");

const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from database then render index template with all companies ////
app.get('/', (request, response) => {
  Company.find()
    .then(result => {
      return response.render('index', {companies: result});
    })
    .catch(error => {
      console.log(`Could not load companies data from database: ${error}`);
      return response.render('index', {companies: null});
    });

});


// From a POST request, add a new company to the DB
app.post('/companies/v1/',
 (request, response) => {
  const company = new Company({
    code: request.body.code,
    name: request.body.name,
    address: request.body.address,
    description: request.body.description,
    capital: request.body.capital,
    owner: request.body.owner
  });

  company.save()
    .then(result => {
      response.redirect('/');
    })
    .catch(error => {
      console.log(`Could not save company object into database: ${error}`);
      response.redirect('/');
    })
});



///////////////////////////////////////////////////
mongoose.connect(process.env.MONGO_URI)
  .then(result => {
    console.log(`Successfully connected to database server..`);
    app.listen(process.env.PORT, () => {
      console.log(`Web server listening on port ${process.env.PORT}`);
    });
  })
  .catch(error => {
    console.log(error);
  })