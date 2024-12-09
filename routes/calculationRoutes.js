const express = require('express');
const router = express.Router();
const { add, subtract, multiply, divide } = require('../utils/mathOperations');

router.get('/multiplyNumbers', (req, res) => {
  const { num1, num2 } = req.query;
  const result = multiply(num1, num2);
  res.render('multiply', { result });
});

router.get('/calculate', (req, res) => {
  try {
    const { num1 = '20', num2 = '15' } = req.query;
    const sum = add(num1, num2);
    const difference = subtract(num1, num2);
    res.render('calculate', { sum, difference });
  } catch (error) {
    res.status(400).render('error', {
      message: 'Invalid input numbers',
      error: { status: 400 }
    });
  }
});

router.get('/demo2/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const subtraction = subtract(num1, num2);
  const division = divide(num1, num2);
  res.render('demo2', { subtraction, division });
});

module.exports = router;