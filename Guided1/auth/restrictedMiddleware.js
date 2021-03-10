const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

module.exports = function restricted(req, res, next) {

    if(req.session){
        console.log(req.session)
        next()
    } else {
        res.status(500).json({message: 'You shall not pass!'})
    }

}