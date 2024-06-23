const express = require('express');
const phoneController = require('../controllers/phoneController');

const router = express.Router();

router.get('/', phoneController.getAllPhones);
router.get('/search', phoneController.searchPhonesByNameOrBrand);
router.post('/', phoneController.addPhone);

module.exports = router;
