// ========== IMPORTS ==========
const express = require('express');
const morgan = require('morgan');

const HumansRoutes = require('./Humans/humansRouter');
const VampiresRoutes = require('./Vampires/vampiresRoutes');
const WereWolfWolvesRoutes = require('./WereWolves/wereWolvesRouter');

const gandlafThreeSeconds = (req, res, next) => {
    const seconds = new Date().getSeconds();

    if(seconds % 3 === 0){
        res.send('You shall not pass')
    } else {
        next()
    }
}

// ========== IMPORTS ==========
const server = express();
server.use(express.json());
server.use(gandlafThreeSeconds);

server.use(morgan('tiny'));

server.use('/humans', HumansRoutes);
server.use('/vampires', VampiresRoutes);
server.use('/werewolves', WereWolfWolvesRoutes);

server.get('/', (req, res) => {
    res.send('<h1>Ello Poppet</h1>')
})

server.use(function(req, res) {
    res.status(404).send('<h1>🛑404 Page not found🛑</h1>')
})

module.exports = server;
