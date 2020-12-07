// ========== IMPORTS ==========
const express = require('express');

const plants = [
    {
        id: 1,
        name: 'Mullen'
    }, {
        id: 2,
        name: 'Sun Flower'
    }
]

// ========== SERVER ==========
const server = express();

server.get('/', (req, res) => res.status(200).send('Ello Poppet'))

server.get('/plants', (req, res) => res.status(200).json(plants))

module.exports = server;