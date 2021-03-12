const express = require('express');

const Dogs = require('./dogsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Dogs.findAll()
    .then(dogsArray => {
        if(dogsArray) {
            res.status(200).json(dogsArray)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find dogs'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Dogs.findById(id)
    .then(dog => {
        if(dog) {
            res.status(200).json(dog)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find dog'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', (req, res) => {
    const newDog = req.body;

    Dogs.addDog(newDog)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find dog'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedDog = req.body
    Dogs.updateDog(id, updatedDog)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find dog'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Dogs.deleteDog(id)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(505).json({ errorMessage: '404 Could not find dog'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
