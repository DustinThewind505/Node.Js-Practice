const express = require('express');

const Humans = require('./humansModel');

const router = express.Router();

router.get('/', (req, res) => {
    Humans.findAllHumans()
    .then(humansArray => {
        res.status(200).json(humansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    Humans.findHumanByID(req.params.id)
    .then(human => {
        res.status(200).json(human)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newHuman = req.body

    Humans.addHuman(newHuman)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Humans.updateHuman(id, changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Humans.deleteHuman(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
