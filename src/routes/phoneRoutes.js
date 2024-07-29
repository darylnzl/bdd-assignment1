const express = require('express');
const jwtMiddleware = require("../middlewares/jwtMiddleware");
const phoneController = require('../controllers/phoneController');

const router = express.Router();

router.get('/', phoneController.getAllPhones);
router.get('/search', phoneController.searchPhonesByNameOrBrand);
router.post('/', jwtMiddleware.verifyToken,jwtMiddleware.verifyAdminRole,phoneController.addPhone);

module.exports = router;
