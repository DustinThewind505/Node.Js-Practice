const express = require('express');

const User = require('./usersModel');

const router = express.Router();

router.get('/', (req, res) => {
    User.findAll()
    .then(usersArray => {
        if(usersArray) {
            res.status(200).json(usersArray)
        } else {
            res.status(404).json({errorMessage: '404 Could not find users'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    User.findByID(id)
    .then(user => {
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({errorMessage: '404 Could not find user'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.post('/', (req, res) => {
    const newUser = req.body;

    User.addUser(newUser)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 Could not add user'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;

    User.updateUser(id, updatedUser)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 Could not find users'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    User.deleteUser(id)
    .then(count => {
        if(count) {
            res.status(200).json(count)
        } else {
            res.status(404).json({errorMessage: '404 Could not find users'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
