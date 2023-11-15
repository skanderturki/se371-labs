const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const Product = require("./model/product");

const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

///////// ADD ROUTES HERE //////////////////////

app.get('/', (request, response) => {
  response.render('index');
})


app.post('/v1/products/code/:code/name/:name/description/:description/quantity/:quantity/price/:price',
  (request, response) => {
    const product = new Product({code: request.params.code,
                                name: request.params.name,
                                description: request.params.description, 
                                quantity: request.params.quantity,
                                price: request.params.price
                                });
    product.save()
      .then(result => {
        response.send(result);
      })
      .catch(error => {
        response.status(400).json({error: "400", msg: error});
      });
    });


app.get('/v1/products', (request, response) => {
  Product.find()
    .then(result => {
      response.json(result);
    })
    .catch(error => {
      console.log(`Could not load products data from database: \n${error}`);
    });
})

////////////////////////////////////////////////

app.use((request, response) => {
  response.status(404).json({error: "404", msg: "Resource not found"});
});

mongoose.connect(process.env.MONGO_URI)
  .then((result) => {
    console.log(`Connection to database established...`);
    app.listen(process.env.port, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Could not connect to database:\n# ${error}`);
  });