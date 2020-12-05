// ========== IMPORTS ==========
const express = require('express');
const helmet = require('helmet');

const homies = [
    {
        name: 'Req'
    },
    {
        name: "Res"
    }
]


// ========== SERVER ==========
const server = express();

// server.use(helmet()) <-----------------------------This is breaking the 404 page image


server.get('/', (req, res) => res.status(200).send('<div style="padding:15% 0 5%;background-color:black;display: flex;flex-direction: column;align-items:center;"><h1 style="color:lawngreen;font-size:46px;">404 could not find page</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L6l3eokSOOa-Y0Brd6ipemjAOzmqvdtm7w&usqp=CAU"/></div>'))

server.get('/homies', (req, res) => res.status(200).json(homies))
module.exports = server;