const mongoose = require('mongoose');

const memoSchema = new mongoose.Schema({
  creator_name : 'String',
  content : 'String'
})
const Memo = mongoose.model('Memo', memoSchema )

module.exports = Memo
;
