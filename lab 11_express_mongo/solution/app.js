const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const Company = require('./model/company');

// let cmp = new Company({code: "ALM", name: "AL Marai", address: "254 king fahd street, Riyadh", 
//                       description: "Milk products", capital: 250000000, owner: "Salah Abid"});

// console.log(cmp);

const app = express();

// Connect to database then start server
mongoose.connect(process.env.MONGO_URI)
  .then((result) => { 
      console.log('Connected to database...');
      app.listen(process.env.PORT, "localhost", () => { 
        console.log(`Listening on port ${process.env.PORT}...`) 
      });
    })
  .catch((err) => {console.log(err); });

  app.get('/company/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner', 
            (request, response) => {
              let code = request.params.code;
              let name = request.params.name;
              let address = request.params.address;
              let description = request.params.description;
              let capital = request.params.capital;
              let owner = request.params.owner;
              let cmp = new Company({code: code, name: name, address: address, 
                      description: description, capital: capital, owner: owner});
              cmp.save()
                  .then((data) => response.send(data._id))
                  .catch((err) => console.log(err));

  });

  app.get('/company/find-all-companies', 
  (request, response) => {
    Company.find()
        .then((data) => response.send(data))
        .catch((err) => console.log(err));

});

  app.use((request, response) => { 
    response.status(404).send('<h1> Error 404, ressource not found </h1>');
   })