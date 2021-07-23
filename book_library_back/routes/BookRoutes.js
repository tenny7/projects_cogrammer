const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController')
const verifyToken = require('../helpers/verify')


router.post('/book/create',verifyToken, BookController.bookCreate, BookController.bookCreate)
router.get('/book/:id',verifyToken,  BookController.getBookWithId, BookController.getBookWithId);
router.put('/book/:id',verifyToken,  BookController.updateBookWithId, BookController.updateBookWithId);           
router.delete('/book/delete/:id', verifyToken,  BookController.deleteBook, BookController.deleteBook);

router.get('/books', BookController.bookIndex)


module.exports = router