const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const projectRouter = require('../projects/project-router');
const mailRouter = require('../mail/mail-router')

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/project', projectRouter);

server.use('/mail', mailRouter);





server.get('/', (req, res) => {
    res.send("It's Alive!")
})

module.exports = server;