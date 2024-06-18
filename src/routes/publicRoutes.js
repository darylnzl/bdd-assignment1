
const express = require('express');
const publicController = require('../controllers/publicController');

const router = express.Router();

router.get('/phones', publicController.getAllPhones); 
router.get('/phones/search', publicController.searchPhonesByNameOrBrand); 
router.get('/brands', publicController.getAllBrands); 

module.exports = router;