const express = require('express');
const Adopters = require('./adopters-model');

const router = express.Router();

router.get('/', (req, res) => {
    Adopters.findAll()
    .then(adoptersArray => {
        res.status(200).json(adoptersArray)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.get('/:name', (req, res) => {
    const { name } = req.params;


    Adopters.findBy(name)
    .then(adopter => {
        res.status(200).json(adopter)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.post('/', (req, res) => {
    const newAdopter = req.body;

    Adopters.addAdopter(newAdopter)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.put('/:name', (req, res) => {
    const { name } = req.params;
    const updatedAdopter = req.body;

    Adopters.updateAdopter(name, updatedAdopter)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.delete('/:name', (req, res) => {
    const { name } = req.params;

    Adopters.deleteAdopter(name)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

module.exports = router;
