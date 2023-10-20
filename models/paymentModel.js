// models/paymentModel.js
const payments = [];

function processPayment(amount, cardNumber, expiryDate, cvv) {
  // Perform basic validation
  if (!amount || !cardNumber || !expiryDate || !cvv) {
    return { success: false, message: 'Invalid request parameters' };
  }

  // For simplicity, let's assume the payment is successful
  const payment = {
    amount,
    cardNumber: '**** **** **** ' + cardNumber.slice(-4),
    timestamp: new Date(),
  };

  payments.push(payment);

  return { success: true, message: 'Payment successful!', payment };
}

function getPayments() {
  return payments;
}

module.exports = { processPayment, getPayments };
