const express = require('express');

const Heros = require('./herosModel');

const router = express.Router();

router.get('/', (req, res) => {
    Heros.findAll()
    .then(herosArray => {
        res.status(200).json(herosArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Heros.findByID(id)
    .then(herosArray => {
        res.status(200).json(herosArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newHero = req.body;

    Heros.addHero(newHero)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedHero = req.body;

    Heros.updateHero(id, updatedHero)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Heros.deleteHero(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
