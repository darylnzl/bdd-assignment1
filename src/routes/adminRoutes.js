const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.post('/login', adminController.login);
router.post('/phones', adminController.addPhone);
router.post('/brands', adminController.addBrand);

module.exports = router;