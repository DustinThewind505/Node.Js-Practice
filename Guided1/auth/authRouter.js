const express = require('express');
const bcrypt = require('bcryptjs');

const Users = require('../api/Users/usersModel');
const { is } = require('bluebird');

const router = express.Router();

router.post('/register', (req, res) => {
    const newUser = req.body;

    const rounds = process.env.HASH_ROUNDS || 6;
    const hash = bcrypt.hashSync(newUser.password, rounds);

    newUser.password = hash;

    Users.addUser(newUser)
    .then(count => {
            res.status(201).json({message: 'Saved ' + newUser.username})
    })
    .catch(err => {
        res.status(500).json({errorMessage: `There was an error with you ${req.method} request`})
    })
})

router.post('/login', (req, res) => {
    const {username, password} = req.body;

    Users.findBy({username})
    .then(user => {
        if(user && bcrypt.compareSync(password, user[0].password)) {
            res.status(200).json(user)
        } else {
            res.status(401).json({errorMessage: 'Please eneter valid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
