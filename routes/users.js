var express = require('express');
var router = express.Router();

// REQUIRE YOUR MODEL HERE AT THE TOP
const users = require('../models/users');

// GET all users
router.get('/all', async (req, res) => {
  try {
    const data = await users.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

