const express = require('express');
const router = express.Router();
const brandsCtrl = require('../controllers/brands');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/brands/new', ensureLoggedIn, brandsCtrl.new);

module.exports = router;