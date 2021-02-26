// ========== IMPORTS ==========
const express = require('express');
const morgan = require('morgan');

const usersRoute = require('./users/usersRoutes');
const sodasRoutes = require('./sodas/sodasRoutes');


// ========== SERVER ==========
const server = express();

server.use('/users', usersRoute);
server.use('/sodas', sodasRoutes);

server.use(express.json());
server.use(morgan('tiny'));



module.exports = server;
