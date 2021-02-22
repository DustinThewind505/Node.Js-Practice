// implement your API here
const express = require('express');
const db = require('./data/db')

const server = express()

server.get('/', (req, res) => {
    res.send('Ello Poppet')
})

server.get('/users', (req, res) => {
    db.find()
    .then(response => res.json(response))
})

server.get('/users/:id', (req, res) => {
    db.findById(req.params.id)
    .then(response => res.json(response))
})

server.listen(8000, () => console.log(`\n\n\t*** Server listening on port 8000 ***\n\n`))
