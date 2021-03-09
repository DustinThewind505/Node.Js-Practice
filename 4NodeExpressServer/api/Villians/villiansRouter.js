const express = require('express');

const Villians = require('./villansModel');

const router = express.Router();

router.get('/', (req, res) => {
    Villians.findAll()
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Villians.findByID(id)
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newVillian = req.body;

    Villians.addVillian(newVillian)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedVillian = req.body;

    Villians.updateVillian(id, updatedVillian)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Villians.deleteVillian(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
