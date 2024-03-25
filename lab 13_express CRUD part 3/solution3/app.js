const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv').config();

const booksRouter = require('./routers/booksRouter');

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))

/* Navigation routes
*/
// Do NOT MODIFY
app.get('/', (request, response) => {
  response.redirect('/books/v1/add/');
})

app.use('/books/v1/', booksRouter);


/* DataBase connection and server start
*/
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