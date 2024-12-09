const express = require('express');
const router = express.Router();
const { reverseString } = require('../utils/stringOperations');

router.get('/reverse', (req, res) => {
  const { str1, str2 } = req.query;
  const reversed1 = reverseString(str1);
  const reversed2 = reverseString(str2);
  res.render('reverse', { reversed1, reversed2 });
});

module.exports = router;