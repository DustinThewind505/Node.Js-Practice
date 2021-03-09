const express = require('express');
const auth = require('../../auth/restrictedMiddleware');

const Users = require('./usersModel');

const router = express.Router();

router.get('/', auth, (req, res) => {

    Users.findAll()
        .then(usersArray => {
            if (usersArray.length !== 0) {
                res.status(200).json(usersArray)
            } else {
                res.status(500).json(usersArray)
            }
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err.message })
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Users.findById(id)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(500).json({ errorMessage: "Could not load users" })
            }
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err.message })
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Users.deleteUser(id)
        .then(count => {
            if (count !== 0) {
                res.status(200).json(count)
            } else {
                res.status(500).json({ errorMessage: "Could not load users" })
            }
        })
        .catch(err => {
            res.status(404).json({ errorMessage: err.message })
        })
})


module.exports = router;
