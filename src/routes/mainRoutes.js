const express = require('express');
const router = express.Router();
const adminRoutes = require('./adminRoutes');
const publicRoutes = require('./publicRoutes');

router.use('/admin', adminRoutes);
router.use('/public', publicRoutes);

module.exports = router;