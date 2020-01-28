const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const Users = require('../auth/auth-model')

const server = express();

server.get('/', (req, res) => {
    res.send("It's Alive!")
})

server.get('/users', (req, res) => {
    Users.findUsers()
    .then(users => {
        res.status(200).json(users)
    })    
    .catch(err => {
        res.status(500).json({message: 'users not found'})
    })
});


module.exports = server;