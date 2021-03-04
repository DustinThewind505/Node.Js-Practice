const express = require('express');

const HubsRoutes = require('./hubs/hubsRoutes');
const LessonsRoutes = require('./lessons/lessonsRoute');

const server = express();

server.use(express.json());

server.use('/hubs', HubsRoutes);
server.use('/lessons', LessonsRoutes);



// server.post('/api/hubs', (req, res) => {

//     hubs.push(req.body)

//     res.json(req.body)
// })

// server.post('/api/lessons', (req, res) => {

//     lessons.push(req.body)

//     res.json(req.body)
// })

// server.put('api/hubs/:id', (req, res) => {
//    const id = req.params.id;
//    const changes = req.body;

//    let found = hubs.find(h => h.id == id);

//    if(found) {
//        Object.assign(found, changes);
//    } else {
//        res.status(404).json({message: 'Hub not found'});
//    }

//     res.json(found)
// })


// server.delete("/api/hubs/:id", (req, res) => {
//     hubs = hubs.filter(element => element.id !== parseInt(req.params.id));

//     res.json(hubs)
// })

module.exports = server;
