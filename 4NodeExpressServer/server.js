// ========== IMPORTS ==========
const express = require('express');

const plantRoutes = require('./Plants/plantsRoutes');

// ========== SERVER ==========
const server = express();

server.use('/plants', plantRoutes);

server.get('/', (req, res) => res.status(200).send('<h1>Go to localhost:8000/plants</h1>'))

module.exports = server;