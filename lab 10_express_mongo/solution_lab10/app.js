const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const Company = require("./model/company");

///////////////// ROUTES //////////////////////////

app.post(
  "/companies/v1/code/:code/name/:name/address/:address/description/:description/capital/:capital/owner/:owner",
  (request, response) => {
    const { code, name, address, description, capital, owner } = request.params;

    let newCompany = new Company({
      code: code,
      name: name,
      address: address,
      description: description,
      capital: capital,
      owner: owner,
    });
    newCompany.save()
      .then((result) => {
        response.json({ error: "", status: true, data: result });
      })
      .catch((error) => {
        console.log(`Could not store object in the database: ${error}`);
        response.json({
          error: "Could not store object in database",
          status: false,
          data: null,
        });
      });
    //console.log(`${code}, ${name}, ${address}, ${description}, ${capital}, ${owner}`);
  }
);

app.get('/companies/v1/', (request, response) => {
  Company.find()
  .then((result) => {
    response.json({ error: "", status: true, data: result });
  })
  .catch((error) => {
    console.log(`Could not load data from the database: ${error}`);
    response.json({
      error: "Could not load data from the database",
      status: false,
      data: null,
    });
  });
});

//////////////////////////////////////////////////us
////////// CONNECT TO DB and launch SERVER ///////
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`Connected to database...`);
    app.listen(process.env.PORT, () => {
      console.log(`Server started at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Could not connect to database: ${error}`);
  });
