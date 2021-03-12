const express = require('express');

const Adopters = require('./adoptersModel');

const router = express.Router();

router.get('/', (req, res) => {
    Adopters.findAll()
    .then(adoptersArray => {
        if(adoptersArray) {
            res.status(200).json(adoptersArray)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find adopters'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Adopters.findById(id)
    .then(adopters => {
        if(adopters) {
            res.status(200).json(adopters)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find adopter'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', (req, res) => {
    const newAdopter = req.body;

    Adopters.addAdopter(newAdopter)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find adopter'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedAdopter = req.body;

    Adopters.updateAdopter(id, updatedAdopter)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find adopter'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Adopters.deleteAdopter(id)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find adopter'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
