const Book =  require('../models/books')


const bookIndex = async (req,res) => {
    books = await Book.find({})
    res.json(books)
}

const bookCreate = (req,res) => { 
        let book = new Book({
            title           : req.body.title,
            publishedDate   : req.body.publishDate,
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

