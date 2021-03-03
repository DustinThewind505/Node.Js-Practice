const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('vampires')
    .then(vampireArray => res.status(200).json(vampireArray))
    .catch(err => res.status(500).json({error: err}))
})

router.get('/:id', (req, res) => {
    db('vampires').where('id', req.params.id).first()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({error: err}))
});

router.post('/', (req, res) => {
    db('vampires').insert(req.body)
    .then(count => res.status(201).json(count))
    .catch(err => res.status(500).json({error: err}))
})

router.put('/:id', (req, res) => {
    db('vampires').where('id', req.params.id).update(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({error: err}))
})

router.delete('/:id', (req, res) => {
    db('vampires').where({id: req.params.id}).delete()
    .then(count => res.status(500).json(count))
    .catch(err => res.status(500).json({error: err}))
})


module.exports = router