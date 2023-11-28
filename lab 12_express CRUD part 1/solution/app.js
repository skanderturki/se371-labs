const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (request, response) => {
  response.render('index', {title: "Add Books"});
});

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