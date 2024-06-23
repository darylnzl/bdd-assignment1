const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.registerAdmin);

module.exports = router;
