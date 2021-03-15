const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../api/Users/usersModel');

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
            const token = generateJWT(user[0])
            console.log(user)
            res.status(200).json({user, token})
        } else {
            res.status(401).json({errorMessage: 'Please enter valid credentials'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Must enter credentials'})
    })
})

router.get('/logout', (req, res) => {
    if(req.session) {
        req.session.destroy();
        res.status(200).send('BYEBYE');
    } else {
        res.status(401).json({message: 'already logged out'})
    }
    res.send('bybye')
})

function generateJWT(user) {
    const payload = {
        userID: user.userID,
        username: user.username,
        userRole: user.userRole
    }

    const secret = process.env.JWT_SECRET || 'Pirates';

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;
