const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../data/Users/usersModel');

const router = express.Router();

router.post('/', (req, res) => {
    const newUser = req.body;
    const hash = bcrypt.hashSync(newUser.password, 1);

    newUser.password = hash;

    User.addUser(newUser)
    .then(count => {
        if(count > 0) {
            res.status(200).json(count)
        } else {
            res.status(500).json({errorMessage: 'Could not add user'})
        }
    })
    .catch(err => {
        res.status(404).json({errorMessage: err})
    })
})

module.exports = router;
