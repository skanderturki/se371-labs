const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const Company = require("./model/company");

const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from database then render index template with all companies ////
app.get('/', (request, response) => {


});


/// MODIFY THIS ROUTE to ACCEPT ARGUMENT in the BODY of the HTTP REQUEST 
/// (hint: use body-parser)
app.post('/v1/companies/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner',
 (request, response) => {
  const company = new Company({
    code: request.params.code,
    name: request.params.name,
    address: request.params.address,
    description: request.params.description,
    capital: request.params.capital,
    owner: request.params.owner
  });

  company.save()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.json({error: error});
    })
});


app.get('/v1/companies',
 (request, response) => {

  Company.find()
    .then(result => {
      response.send(result);
    })
    .catch(error => {
      response.json({error: error});
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