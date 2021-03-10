const express = require('express');
const morgan = require('morgan');

const AuthRoutes = require('../auth/auth-router');
const AdoptersRouter = require('./adopters/adopters-router');
const DogsRouter = require('./dogs/dog-router');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));

server.use('/auth', AuthRoutes);
server.use('/adopters', AdoptersRouter);
server.use('/dogs', DogsRouter);

module.exports = server;
