const express = require('express');
const morgan = require('morgan');

const DogsRouter = require('./dog-router');

const server = express();

server.use(express.json());
server.use(morgan('tiny'));

server.use('/dogs', DogsRouter);

// [GET] / (Hello World endpoint)

// [GET] /api/dogs/:id (R of CRUD, fetch dog by :id)

// [GET] /api/dogs (R of CRUD, fetch all dogs)

// [POST] /api/dogs (C of CRUD, create new dog from JSON payload)

// [PUT] /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)

// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

module.exports = server;
