var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines');

router.get('/', winesCtrl.index);
router.get('/new', winesCtrl.new);
router.post('/', winesCtrl.create)
router.get('/:id', winesCtrl.show);
module.exports = router;