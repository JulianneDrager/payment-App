// app.js
const express = require('express');
const bodyParser = require('body-parser');
const paymentController = require('./controllers/paymentController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/process-payment', paymentController.processPayment);
app.get('/payments', paymentController.getPayments);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
