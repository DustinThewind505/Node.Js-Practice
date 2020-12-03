// ========== IMPORTS ==========
const express = require('express');

const port = 8001;

// ========== SERVER ==========
const server = express();

server.get('/', (req, res) => res.status(200).send('Hello from basic express server'))

server.listen(port, () => console.log(`\n\t\t***Server is listening on ${port}***\n`))