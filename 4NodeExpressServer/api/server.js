const express = require('express');
const morgan = require('morgan');

const VilliansRoutes = require('./Villians/villiansRouter');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));

server.use('/villians', VilliansRoutes);

module.exports = server;
