const express = require('express');

const hobbitsRoutes = require('./hobbits/hobbitsRoutes');
const vampiresRouter = require('./vampires/vampiresRoute');

const server = express();
server.use(express.json());

server.use('/hobbits', hobbitsRoutes);
server.use('/vampires', vampiresRouter);

server.get('/', (req, res) => {
    res.send('<h1>Got to localhost:8000/hobbits</h1>')
});

server.use(function(req, res) {
    res.status(404).send('<h1>🛑404 Page not found🛑</h1>')
});


server.listen(8000, () => console.log(`\n\n\t*** Server is listening on port 8000 ***\n`));
