const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model');
const secrets = require('../config/secrets');

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.getUser({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = getJwt(user);
                res.status(200).json({message: `Welcome ${user.username}!`, token});
            } else {
                res.status(401).json({ message: 'Invalid Credentials'})
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});


function getJwt(user) {
    const payload = {
      subject:user.id,
      username: user.username,
      jwtid: 1,
    };
    const options = {
      expiresIn: '8h',
    }
    return jwt.sign(payload, secrets.jwtSecret, options);
  }
  
  module.exports = router;