const express = require('express');

const db = require('../../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('villians')
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    db('villians').where('VillianID', req.params.id).first()
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newVillian = req.body;

    db('villians').insert(newVillian)
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.put('/:id', (req, res) => {
    const updatedVillian = req.body;

    db('villians').where('VillianID', req.params.id).update(updatedVillian)
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db('villians').where('VillianID', id).delete()
    .then(villiansArray => {
        res.status(200).json(villiansArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
