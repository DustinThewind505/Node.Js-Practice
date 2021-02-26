const express = require('express');
const morgan = require('morgan');

const hobbitsRoutes = require('./hobbits/hobbitsRoutes');
const vampiresRouter = require('./vampires/vampiresRoute');

function balance(req, res, next) {
    const time = Date.now();

    if( time % 2 === 1){
        next()
    } else {
        res.status(403).json({message: "Balance is the key."})
    }
}

const server = express();
server.use(express.json());
server.use(morgan('tiny'));
server.use(balance);

server.use('/hobbits', hobbitsRoutes);
server.use('/vampires', vampiresRouter);

server.get('/', (req, res) => {
    res.send('<h1>Got to localhost:8000/hobbits</h1>')
});

server.use(function(req, res) {
    res.status(404).send('<h1>🛑404 Page not found🛑</h1>')
});

module.exports = server;