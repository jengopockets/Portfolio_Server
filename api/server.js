const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router');
const projectRouter = require('../projects/project-router');
const mailRouter = require('../mail/mail-router')

const corsOptions = {
    origin: 'https://www.jacobtharp.com',
    optionsSuccessStatus: 200
}

const server = express();
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
server.use(cors(corsOptions));
server.use(helmet());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/project', projectRouter);

server.use('/mail', mailRouter);





server.get('/', (req, res) => {
    res.send("It's Alive!")
})

module.exports = server;