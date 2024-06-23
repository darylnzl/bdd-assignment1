const express = require('express');
const brandController = require('../controllers/brandController');
const router = express.Router();

router.get('/', brandController.getAllBrands);
router.post('/', brandController.addBrand);

module.exports = router;
