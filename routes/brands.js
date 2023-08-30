
const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brands');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/brands/new', ensureLoggedIn, brandsCtrl.new);
router.post('/brands', ensureLoggedIn, brandsCtrl.create);
router.post('/wines/:id/brands', ensureLoggedIn, brandsCtrl.addToWine)
router.get('/brands/:id/show', brandsCtrl.show);
router.get('/brands/index', brandsCtrl.index);

module.exports = router;