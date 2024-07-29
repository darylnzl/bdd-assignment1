const express = require('express');
const brandController = require('../controllers/brandController');
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const router = express.Router();

router.get('/',brandController.getAllBrands);
router.post('/',jwtMiddleware.verifyToken,jwtMiddleware.verifyAdminRole,brandController.addBrand);

module.exports = router;
