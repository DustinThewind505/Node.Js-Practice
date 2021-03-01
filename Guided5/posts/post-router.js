const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('posts')
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json({ message: 'Failed to get posts'}))
});

router.get('/:id', (req, res) => {
    db('posts').where('id', req.params.id).first()
    .then(response => res.status(200).json(response))
});

router.post('/', (req, res) => {
    db('posts').insert(req.body)
    .then(response => res.status(201).res.send(response))
    .catch(err => {
        res.status(500).json({message: err})
    })
});

router.put('/:id', (req, res) => {
    db('posts').where({id: req.params.id}).update(req.body)
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
});

router.delete('/:id', (req, res) => {
    db('posts').where({ id: req.params.id }).delete()
    .then(response => res.status(200).json(response))
    .catch(err => console.log(err))
});

module.exports = router;