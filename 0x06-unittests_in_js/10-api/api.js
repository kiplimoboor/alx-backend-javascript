const express = require('express');

app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send('Payment methods for cart ' + req.params.id);
});

app.get('/available_payments', (req, res) => {
  res.send({ payment_methods: { credit_cards: true, paypal: false } });
});

app.use(express.json());
app.post('/login', (req, res) => {
  if (req.body) res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => console.log('API available on localhost port ' + port));
