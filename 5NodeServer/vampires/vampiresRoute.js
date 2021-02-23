const express = require('express');

const router = express.Router();
router.use(express.json());

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