const express = require('express');

const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/add/', booksController.openBooksPage)

router.get('/search/', booksController.openSearchPage)

router.get('/', booksController.search)

router.post('/', booksController.add);

router.delete('/:id/', booksController.deleteBook);

module.exports = router;