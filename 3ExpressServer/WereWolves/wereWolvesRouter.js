const express = require('express');

const WereWolves = require('./wereWolvesModel');

const router = express.Router();

router.get('/', (req, res) => {
    WereWolves.findAllWereWolves()
    .then(wereWolvesArray => {
        res.status(200).json(wereWolvesArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    WereWolves.findWereWolfByID(req.params.id)
    .then(wereWolf => {
        res.status(200).json(wereWolf)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newWereWolf = req.body

    WereWolves.addWereWolf(newWereWolf)
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

    WereWolves.updateWereWolf(id, changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    WereWolves.deleteWereWolf(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
