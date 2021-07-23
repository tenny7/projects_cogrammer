const Book =  require('../models/books')
const { body } = require('express-validator/check')
const { validationResult } = require('express-validator/check');


const bookIndex = async (req,res) => {
    books = await Book.find({})
    res.json(books)
}

exports.validate = (method) => {
    switch (method) {
      case 'bookCreate': {
       return [ 
          body('title', 'enter valid string').isString(),
          body('author').isString(),
          body('pages').isInt(),
         ]   
      }
    }
  }

const bookCreate = (req,res) => { 
        let book = new Book({
            title           : req.body.title,
            author          : req.body.author,
            pages           : req.body.pages
        })
        book.save()
        .then(()=> {
            res.json({
                "success" : "Book created"
            })
        }).catch((err) => {
            res.json({error: err })
        });     
}


exports.validate = (method) => {
    switch (method) {
      case 'getBookWithId': {
        return [ 
            param('id', 'enter valid string').notEmpty()
           ]  
      }
    }
  }
const getBookWithId = async (req, res) => {
    book = await Book.findById(req.params.id)
    if (book) {
        res.json({
            'data': book
        })
    }else {
        res.json({
            'message': 'failed to find book'
        })
    }
}



exports.validate = (method) => {
    switch (method) {
      case 'updateBookWithId': {
        return [ 
            param('id', 'enter valid string').notEmpty(),
            body('title').isString(),
            body('author').isString(),
            body('pages').isInt(),
           ]   
      }
    }
  }
const updateBookWithId = (req,res) => {

    bookUpdate = Book.findByIdAndUpdate(req.params.id, {
            title : req.body.title,
            author: req.body.author,
            pages : req.body.pages  
    }).then((success) => {
        res.json({
            "message" : "Updated"
        })
    }).catch((error) => {
        res.json({
            "message":"Failed"
        })
    });
    
}


exports.validate = (method) => {
    switch (method) {
      case 'deleteBook': {
       return [ 
          param('id').notEmpty()
         ]   
      }
    }
  }
const deleteBook = (req,res) => {
    book = Book.deleteOne({_id:req.params.id})
    .then(() => {
        res.json({
            'success' : 'book deleted'
        })
    })
    .catch((error) => {
        res.json({
            'message' : error
        })
    })
}

module.exports = {
    bookIndex,
    bookCreate,
    getBookWithId,
    deleteBook,
    updateBookWithId
}

