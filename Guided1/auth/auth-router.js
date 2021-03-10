const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../data/db-config');

const router = express.Router();

// ========== Register endpoint ==========
router.post('/register', (req, res) => {
    const user = req.body;

    const rounds = process.env.HASH_ROUNDS || 4;
    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    db('users').insert(user)
    .then(saved => {
        res.status(201).json(user)
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })

})


// ========== Login endpoint ==========
router.post('/login', (req, res) => {
    const user = req.body;

    db('users').where('name', user.name).first()
    .then(element => {
        if(element && bcrypt.compareSync(user.password, element.password)) {
            res.status(200).json({message: `Welcome ${element.name}, have a cookie.`})
        } else {
            res.status(401).json({message: 'Could not find user'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

// ========== Logout endpoint ==========
router.post('/logout', (req, res) => {
    const user = req.body;

    db('users').where('name', user.name).first()
    .then(element => {
        if(element && bcrypt.compareSync(user.password, element.password)) {
            res.status(200).json({message: `Welcome ${element.name}, have a cookie.`})
        } else {
            res.status(401).json({message: 'Could not find user'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: err.message})
    })
})

module.exports = router;
