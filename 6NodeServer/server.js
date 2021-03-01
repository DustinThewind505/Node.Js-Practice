const express = require('express');
const morgan = require('morgan');

const SurvivorRoutes = require('./Survivor/survivorRoutes');

const server = express();
server.use(express.json());
server.use(morgan('tiny'))

server.use('/api/survivor', SurvivorRoutes)

module.exports = server;
