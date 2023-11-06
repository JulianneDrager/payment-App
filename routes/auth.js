const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post(
  '/register',
  [
    check('name').notEmpty(),
    check('email').isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  authController.register
);

router.post('/login', authController.login);

module.exports = router;
javascript
Copy code
// src/routes/admin.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.authenticateUser, authMiddleware.authorizeAdmin, adminController.getAdminData);

module.exports = router;