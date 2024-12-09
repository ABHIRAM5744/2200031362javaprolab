const express = require('express');
const router = express.Router();

router.get('/greet', (req, res) => {
  const { username } = req.query;
  res.render('greet', { username });
});

router.get('/about', (req, res) => {
  res.render('about');
});

router.get('/demo1', (req, res) => {
  const { age, country } = req.query;
  res.render('demo1', { age, country });
});

router.get('/productform', (req, res) => {
  res.render('productform');
});

module.exports = router;