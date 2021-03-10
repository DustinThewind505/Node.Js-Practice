const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

module.exports = function restricted(req, res, next) {
    const user = req.headers;

    if(user.name && user.password){
        db('users').where('name', user.name).first()
        .then(element => {
            if(bcrypt.compareSync(user.password, element.password)){
                next()
            } else {
                res.status(401).json({message: 'Provide valid credentials'})
            }
        })
        .catch(err => {
            res.status(500).json({errorMessage: err.message})
        })
    } else {
        res.status(500).json({message: 'You shall not pass!'})
    }

}