const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();

const Company = require("./model/company");

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

///////////////////////////////////////////////////
////////////////////   ROUTES    //////////////////
///////////////////////////////////////////////////

// Load all companies from database then render index template with all companies ////
app.get('/', (request, response) => {
  Company.find()
    .then(result => {
      response.render('index', {error: null, companies: result});
    })
    .catch(error => {
      response.render('index', {error: "Could not load data from server", companies: null});
    })
});

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
      console.log(`Article added to database: id -> ${result._id}`);
      response.redirect('/');
    })
    .catch(error => {
      console.log(error);
      response.redirect('/');
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

app.delete('/v1/companies/code/:code',
 (request, response) => {
  let id;
  Company.find({code: request.params.code})
  .then(result => {
    if(result.length > 0) {
      id = result[0]._id;
      Company.findByIdAndDelete(id)
      .then((result) => {
        console.log(`Article deleted from database: id -> ${result._id}`);
        response.redirect('/');
      })
    }

  })
  .catch(error => {
    response.json({error: error});
  })

});

app.put('/v1/companies/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner',
 (request, response) => {
  const filter = {code: request.params.code};
  const update = {
                    name: request.params.name, 
                    address: request.params.address,
                    description: request.params.description,
                    capital: request.params.capital,
                    owner: request.params.owner
                 };
  Company.findOneAndUpdate(filter, update)
  .then((result) => {
    console.log(`Article updates in database: id -> ${result._id}`);
    response.redirect('/');
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