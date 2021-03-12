const express = require('express');
const morgan = require('morgan');

const AuthRoutes = require('../auth/authRouter');
const UsersRoutes = require('./Users/userRouter');
const AdoptersRoutes = require('./Adopters/adoptersRoutes');
const DogsRoutes = require('./Dogs/dogsRoutes');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));

server.use('/auth', AuthRoutes);
server.use('/users', UsersRoutes);
server.use('/adopters', AdoptersRoutes);
server.use('/dogs', DogsRoutes);

module.exports = server;
