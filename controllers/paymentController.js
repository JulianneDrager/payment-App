// controllers/paymentController.js
const paymentModel = require('../models/paymentModel');

function processPayment(req, res) {
  const { amount, cardNumber, expiryDate, cvv } = req.body;
  const result = paymentModel.processPayment(amount, cardNumber, expiryDate, cvv);
  res.json(result);
}

function getPayments(req, res) {
  const payments = paymentModel.getPayments();
  res.json({ success: true, payments });
}

module.exports = { processPayment, getPayments };
