const express = require('express');
const mongoose = require('mongoose');
var { Liquid } = require('liquidjs');

const engine = new Liquid({
  root: __dirname, // for layouts and partials
  extname: '.liquid'
})



   
const bodyParser = require('body-parser');

const Book = require('./model/book');

require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.engine('liquid', engine.express()) // register liquid engine
app.set('views', ['./views/partials', './views']) // specify the views directory
app.set('view engine', 'liquid') // set to default

app.use(bodyParser.urlencoded({ extended: false }))

/* Navigation routes
*/
// Do NOT MODIFY
app.get('/', (request, response) => {
  response.redirect('/books/v1/add/');
})

// Do NOT MODIFY
app.get('/books/v1/add/', (request, response) => {
  response.render('add-books', {title: 'Add Books', message: '', error: ''});
})

// Do NOT MODIFY
app.get('/books/v1/search/', (request, response) => {
  response.redirect('/books/v1/');
})

/* Action routes
*/
app.get('/books/v1/', (request, response) => {
  const title = request.query.title;

  //Book.find({ "title": { "$regex": `${title}`, "$options": "i" } })
  Book.find()
    .then(data => {
      response.render('search-books', {title: 'Search Books', books: data, error: ""});
    })
    .catch(err => {
      console.log(`Couldn't search for books: ${err}`);
      response.render('search-books', {title: 'Search Books', books: [], error: err});
    })
  
})

// Do NOT MODIFY
app.post('/books/v1/', (request, response) => {
  const code = request.body.code;
  const title = request.body.title;
  const author = request.body.author;
  //console.log(`${code}, ${title}, ${author}`);

  let newBook = new Book({code: code, title: title, author: author});
  newBook.save()
    .then((result) => {
      response.render('add-books', {
                                title: 'Add Books', 
                                message: 'Book added successfully',
                                error: ''
                              });
    })
    .catch((err) => {
      console.log(`Error when adding a Book object: ${err}`);
      response.render('add-books', {
        title: 'Add Books', 
        message: '',
        error: `Could not save data to database: ${err}`
      });
    });
});


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