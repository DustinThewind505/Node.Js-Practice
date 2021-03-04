const express = require('express');
const db  = require('./dog-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.findAll()
    .then(dogs => {
        res.status(200).json(dogs)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.get('/:name', (req, res) => {
    db.findById(req.params.name)
    .then(dog => {
        res.status(200).json(dog)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.post('/', (req, res) => {
    db.create(req.body)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.put('/:name', (req, res) => {
    db.update(req.params.name, req.body)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

router.delete('/:name', (req, res) => {
    db.delete(req.params.name)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({ error: err})
    })
})

module.exports = router;
