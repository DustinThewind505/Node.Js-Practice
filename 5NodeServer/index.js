const express = require('express');

const hobbit = {
    name: 'Frodo',
    race: 'Hobbit'
}

const server = express();

server.get('/', (req, res) => {
    res.json(hobbit)
})

server.listen(8000, () => console.log('Listening**********'))
