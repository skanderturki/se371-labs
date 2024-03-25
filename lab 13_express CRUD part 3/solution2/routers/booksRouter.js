const express = require('express');
const booksController = require('../controllers/booksController');
const router = express.Router();

router.get('/add/', booksController.addBooksPage)

router.get('/search/', booksController.searchBooksPage)

/* Action routes
*/
router.get('/', booksController.search)

router.post('/', booksController.add);

router.delete('/:id/', booksController.deleteBook);

module.exports = router;
