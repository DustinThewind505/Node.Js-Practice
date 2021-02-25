const express = require('express');

let vampires = [
    {
        name: 'Gangrel'
    },
    {
        name: 'Dracula'
    },
    {
        name: 'Edward'
    },
    {
        name: 'Blade'
    }
]

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json(vampires)
})

router.post('/', (req, res) => {
    const newVampire = req.body;

    vampires.push(newVampire);

    res.status(201).send('newVampire')
})

router.delete('/:name', (req, res) => {
    const vampire = vampires.find(vampire => vampire.name === req.params.name);

    vampires = vampires.filter(element => element.name !== vampire.name)

    res.status(200).json(vampires)

})


module.exports = router