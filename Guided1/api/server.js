const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const AuthRoutes = require('../auth/auth-router');
const AdoptersRouter = require('./adopters/adopters-router');
const DogsRouter = require('./dogs/dog-router');

const server = express();

const sessionConfig = {

    name: 'monkey',
    secret: 'keep it secret, keep it safe!',
    resave: false,
    saveUninitialized: true, //<=================================== MUST TURN OFF IN PRODUCTION ===================================
    cookie: {
        maxAge: 1000 * 40,
        secure: false,
        httpOnly: true
    }

}

server.use(express.json());
server.use(morgan('tiny'));
server.use(session(sessionConfig));

server.use('/auth', AuthRoutes);
server.use('/adopters', AdoptersRouter);
server.use('/dogs', DogsRouter);

module.exports = server;
