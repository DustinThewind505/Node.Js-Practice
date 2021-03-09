const express = require('express');
const morgan = require('morgan');

const RegisterRoutes = require('./auth/registerAuth');
const LoginRoutes = require('./auth/loginAuth');
const UsersRoutes = require('./data/Users/usersRoutes');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));

server.use('/api/register', RegisterRoutes);
server.use('/api/login', LoginRoutes);
server.use('/api/users', UsersRoutes);

module.exports = server;
