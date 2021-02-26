const express = require('express');

const router = express.Router();
router.use(express.json());

function approachTheCastle(req, res, next) {
    console.log('Approach the castle door, Dracula invites you inside...');
    next();
}

function auth(req, res, next) {
    if(req.url === '/sunlight'){
        next();
    } else {
        res.status(500).send('<h1>Eaten Alive❣</h1>')
    }
}

router.use(approachTheCastle);

let vampires = [
    {
        id: 1,
        name: 'Blade',
        race: 'Daywalker'
    },
    {
        id: 2,
        name: 'Dracula',
        race: 'OG'
    },
    {
        id: 3,
        name: 'Edward',
        race: 'Sparkly'
    },
    {
        id: 4,
        name: 'Cane',
        race: 'OG'
    },
]

let nextID = 5

router.get('/sunlight', auth, (req, res) => {
    console.log('Count Dracula signs for Carfax Abby');
    console.log('Quickly draw the shades open and burn him to death!');
    res.send('<h1>Slash Slash!</h1>')
})

router.get('/', (req, res) => {
    res.status(200).json(vampires)
})

router.get('/:id', (req, res) => {
    const vampireByID = vampires.find(vampire => vampire.id === parseInt(req.params.id))

    if (!vampireByID) {
        res.status(404).json({ message: 'Vampire not found 😢😢' })
    }

    res.status(200).json(vampireByID)
})

router.post('/', (req, res) => {
    req.body.id = nextID++;

    vampires.push(req.body);

    res.status(201).json(req.body)
})

router.put('/:id', (req, res) => {
    let newVampireState = vampires.find(vampire => vampire.id === parseInt(req.params.id));

    if(!newVampireState){
        res.status(404).json({message: 'Vampire could not be found'})
    } else {
        Object.assign(newVampireState, req.body);

        res.status(200).json(newVampireState);
    }

})

router.delete('/:id', (req, res) => {
    const deleted = vampires.find(vampire => vampire.id === parseInt(req.params.id))
    vampires = vampires.filter(vampire => vampire.id !== parseInt(req.params.id))

    res.status(200).json(deleted)
})

module.exports = router;