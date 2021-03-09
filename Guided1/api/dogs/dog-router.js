const express = require('express');
const Dogs = require('./dog-model');

const router = express.Router();

router.get('/', (req, res) => {
    Dogs.findAll()
    .then(dogsArray => {
        res.status(200).json(dogsArray)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.get('/:name', (req, res) => {
    const { name } = req.params;


    Dogs.findBy(name)
    .then(dog => {
        res.status(200).json(dog)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.post('/', (req, res) => {
    const newDog = req.body;

    Dogs.addDog(newDog)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.put('/:name', (req, res) => {
    const { name } = req.params;
    const updatedDog = req.body;

    Dogs.updateDog(name, updatedDog)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.delete('/:name', (req, res) => {
    const { name } = req.params;

    Dogs.deleteDog(name)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

module.exports = router;
