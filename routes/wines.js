var express = require('express');
var router = express.Router();
const winesCtrl = require('../controllers/wines');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', winesCtrl.index);
router.get('/new', ensureLoggedIn, winesCtrl.new);
router.post('/', ensureLoggedIn, winesCtrl.create);
router.get('/:id', winesCtrl.show);
router.put('/:id', winesCtrl.update);
router.get('/:id/edit', ensureLoggedIn, winesCtrl.edit);
router.delete('/:id', ensureLoggedIn, winesCtrl.delete)


module.exports = router;