const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const phoneRoutes = require('./phoneRoutes');
const brandRoutes = require('./brandRoutes');

router.use('/user', userRoutes);
router.use('/phones', phoneRoutes); 
router.use('/brands', brandRoutes); 

module.exports = router;
