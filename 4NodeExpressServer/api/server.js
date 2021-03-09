const express = require('express');
const morgan = require('morgan');

const VilliansRoutes = require('./Villians/villiansRouter');
const HerosRouter = require('./Heros/herosRouter');

const server = express();
server.use(express.json());
server.use(morgan('tiny'));

server.use('/villians', VilliansRoutes);
server.use('/heros', HerosRouter);

module.exports = server;
