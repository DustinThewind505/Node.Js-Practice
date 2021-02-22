const express = require('express');

const server = express();

server.use(express.json());

let hubs = [
    {
        id: 1,
        name: 'A',
        lessonId: 11,
        cohort: 'Web27'
    },
    {
        id: 2,
        name: 'B',
        lessonId: 12,
        cohort: 'Web28'
    },
    {
        id: 3,
        name: 'C',
        lessonId: 13,
        cohort: 'Web29'
    },
]

let lessons = [
    {
        id: 11,
        name: 'Apple',
        cohort: 'Web27'
    },
    {
        id: 12,
        name: 'Banana',
        cohort: 'Web28'
    },
    {
        id: 13,
        name: 'Cherry',
        cohort: 'Web29'
    },
]

server.get('/', (req, res) => {
    res.send('<h1>ElloPoppet</h1>')
})

server.get('/api/hubs', (req, res) => {
    res.json(hubs)
})
server.post('/api/hubs', (req, res) => {

    hubs.push(req.body)

    res.json(req.body)
})

server.get('/api/lessons', (req, res) => {
    res.json(lessons)
})
server.post('/api/lessons', (req, res) => {

    lessons.push(req.body)

    res.json(req.body)
})

server.put('api/hubs/:id', (req, res) => {
   const id = req.params.id;
   const changes = req.body;

   let found = hubs.find(h => h.id == id);

   if(found) {
       Object.assign(found, changes);
   } else {
       res.status(404).json({message: 'Hub not found'});
   }

    res.json(found)
})


server.delete("/api/hubs/:id", (req, res) => {
    hubs = hubs.filter(element => element.id !== parseInt(req.params.id));

    res.json(hubs)
})


server.listen(8000, (req, res) => console.log(`\n\t\t*** Server listening on port 8000 *** \n`))
