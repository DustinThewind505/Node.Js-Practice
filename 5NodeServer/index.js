const express = require('express');

const hobbits = [
    {
        id: 1,
        name: 'Frodo',
        race: 'Hobbit'
    },
    {
        id: 2,
        name: 'Sam',
        race: 'Hobbit'
    },
    {
        id: 3,
        name: 'Merry',
        race: 'Hobbit'
    },
    {
        id: 4,
        name: 'Pippen',
        race: 'Hobbit'
    },
]

let nextID = 5

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h1>Got to localhost:8000/hobbits</h1>')
})

server.get('/hobbits', (req, res) => {
    res.json(hobbits)
})

server.post('/hobbits', (req, res) => {
    const hobbit = req.body;
    hobbit.id = nextID++;
  
    hobbits.push(hobbit);
  
    res.status(201).json(hobbits);
  });

server.listen(8000, () => console.log(`\n\n\t*** Server is listening on port 8000 ***\n`))
