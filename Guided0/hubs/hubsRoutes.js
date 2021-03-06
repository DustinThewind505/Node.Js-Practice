const express = require('express');

const Hubs = require('./hubsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Hubs.findAll()
    .then(hubsArray => {
        res.status(200).json(hubsArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/', (req, res) => {
    Hubs.findAll()
    .then(hubsArray => {
        res.status(200).json(hubsArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Hubs.findByID(id)
    .then(hub => {
        res.status(200).json(hub)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newPost = req.body;

    Hubs.addHub(newPost)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const newPost = req.body;
    
    Hubs.updateHub(id, newPost)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Hubs.deleteHub(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
