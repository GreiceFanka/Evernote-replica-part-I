const express = require('express');
const router = express.Router();
const User = require('../models/user');

//rota para registro de usuários//
router.post('/register', async(req, res) => {
  const {name, email, password} = req.body;
  const user = new User({name, email, password});
  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({error: 'Error registering new user'});
  }
})

module.exports = router;
