const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../data/Users/usersModel');

const router = express.Router();

router.post('/', (req, res) => {
    const newUser = req.body;

    User.findById(newUser.username)
        .then(user => {
            if (user && bcrypt.compareSync(newUser.password, user.password)) {
                res.status(200).json(user)
            } else {
                res.status(500).json({ errorMessage: 'Invalid credentials' })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(404).json({ errorMessage: 'Bloo' })
        })
})

module.exports = router;
