var express = require('express');
var router = express.Router();
var memoControllers = require('../controllers/memoControllers')

//Get all memo
router.get('/', memoControllers.readMemo)
//Post a memo
router.post('/', memoControllers.createMemo)
//Delete a memo
router.delete('/:id', memoControllers.deleteMemo)
//Update a memo
router.patch('/:id', memoControllers.updateMemo)

module.exports = router;
