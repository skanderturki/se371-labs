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


/// MODIFY THIS ROUTE to ACCEPT ARGUMENTS in the BODY of the HTTP REQUEST 
/// (hint: use body-parser)
app.post('/v1/companies/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner',
 (request, response) => {
  ......

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