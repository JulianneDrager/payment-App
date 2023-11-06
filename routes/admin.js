
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticateUser, authMiddleware.authorizeAdmin, adminController.getAdminData);

module.exports = router;