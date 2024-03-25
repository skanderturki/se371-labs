const Book = require('../model/book');

const addBooksPage = (request, response) => {
  response.render('add-books', {title: 'Add Books', message: '', error: ''});
};

const searchBooksPage = (request, response) => {
  response.redirect('/books/v1/');
};

const search = (request, response) => {
  const title = request.query.title;

  Book.find({ "title": { "$regex": `${title}`, "$options": "i" } })
    .then(data => {
      response.render('search-books', {title: 'Search Books', books: data, error: ""});
    })
    .catch(err => {
      console.log(`Couldn't search for books: ${err}`);
      response.render('search-books', {title: 'Search Books', books: [], error: err});
    })
  
};

const add = (request, response) => {
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
};

const deleteBook = (request, response) => {
  const id = request.params.id;
  Book.findByIdAndDelete(id).then(() => {
    response.json({successful: true, redirect: '/books/v1'});
  }).catch(error => {

  })
}

module.exports = { addBooksPage, searchBooksPage, search, add, deleteBook }