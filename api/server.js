const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const projectRouter = require('../projects/project-router');

const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/project', projectRouter);




server.get('/', (req, res) => {
    res.send("It's Alive!")
})

module.exports = server;