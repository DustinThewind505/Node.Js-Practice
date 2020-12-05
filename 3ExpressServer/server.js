const express = require('express');

const port = 8000;

const homies = [
    {
        name: 'Req'
    },
    {
        name: "Res"
    }
]

const server = express();

server.get('/', (req, res) => res.status(200).send('Ello poppet from node/express server 😁🎉'))

server.get('/homies', (req, res) => res.status(200).json(homies))

server.listen(port, () => {
    console.log(`\n\t\t***Server listening on port ${port}***\n`)
})