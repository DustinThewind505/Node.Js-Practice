const express = require('express');
const morgan = require('morgan');

const HubsRoutes = require('./hubs/hubsRoutes');
const LessonsRoutes = require('./lessons/lessonsRoutes');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));

server.use('/hubs', HubsRoutes);
server.use('/lessons', LessonsRoutes);

module.exports = server;
