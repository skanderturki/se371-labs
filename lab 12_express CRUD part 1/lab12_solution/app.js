const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const Book = require('./model/book');

require('dotenv').config();

const app = express();

app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/', (request, response) => {
  response.render('index', {title: 'Add Books', message: '', error: ''});
})

app.post('/books/v1/', (request, response) => {
  const code = request.body.code;
  const title = request.body.title;
  const author = request.body.author;
  //console.log(`${code}, ${title}, ${author}`);

  let newBook = new Book({code: code, title: title, author: author});
  newBook.save()
    .then((result) => {
      response.render('index', {
                                title: 'Add Books', 
                                message: 'Book added successfully',
                                error: ''
                              });
    })
    .catch((err) => {
      console.log(`Error when adding a Book object: ${err}`);
      response.render('index', {
        title: 'Add Books', 
        message: '',
        error: `Could not save data to database: ${err}`
      });
    });
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