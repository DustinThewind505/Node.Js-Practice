const express = require('express');

const Lessons = require('./lessonsModel');

const router = express.Router();

router.get('/', (req, res) => {
    Lessons.findAll()
    .then(lessonsArray => {
        res.status(200).json(lessonsArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/', (req, res) => {
    Lessons.findAll()
    .then(lessonsArray => {
        res.status(200).json(lessonsArray)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Lessons.findByID(id)
    .then(lesson => {
        res.status(200).json(lesson)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.post('/', (req, res) => {
    const newPost = req.body;

    Lessons.addLesson(newPost)
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
    
    Lessons.updateLesson(id, newPost)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

router.delete('/', (req, res) => {
    const id = req.params.id;

    Lessons.deleteLesson(id)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err})
    })
})

module.exports = router;
