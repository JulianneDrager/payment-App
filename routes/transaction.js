const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/deposit', authMiddleware.authenticateUser, transactionController.deposit);
router.post('/withdraw', authMiddleware.authenticateUser, transactionController.withdraw);
router.post('/transfer', authMiddleware.authenticateUser, transactionController.transfer);
router.get('/history', authMiddleware.authenticateUser, transactionController.getTransactionHistory);

module.exports = router;