const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { 
        type   : String, required: false
    },
    author: { 
        type: String, required: false
    },
    publshedDate: { 
        type: String, required:false
    },
    pages: { 
        type: Number, required: false
    },
    createdAt: {
        type: Date, required:false, default: Date.now
    }   
})

module.exports = mongoose.model('Book', bookSchema)


