const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({
  creator_name : 'String',
  content : 'String'
})
const Book = mongoose.model('Book', bookSchema )

module.exports = Book
;
