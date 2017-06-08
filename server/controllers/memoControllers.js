const ObjectId = require('mongodb').ObjectId;
const memoModel = require('../models/memo')

var createMemo = function(req,res) {
  memoModel.create({
    creator_name : req.body.creator_name,
    content : req.body.content
  }, function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var updateMemo = function(req,res) {
  memoModel.findOne({
    _id : ObjectId(req.params.id)
  }, function(err,result) {
    if (err) {
      res.send(err)
    } else {
      result.content = req.body.content || result.content
      result.save(function(err,result) {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
}

var readMemo = function(req,res) {
  memoModel.find({}, function(err,result) {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var deleteMemo = function(req,res) {
  memoModel.deleteOne({
    _id : ObjectId(req.params.id)
  }, function(err) {
    if (err) {
      res.send(err)
    } else {
      res.send("Success")
    }
  })
}

module.exports = {
  createMemo,
  readMemo,
  updateMemo,
  deleteMemo
};
