const bcrypt = require('bcryptjs');

module.exports = function auth(req, res, next) {
    const { username, password } = req.headers;


    if (username && password) {

        Users.findById(username)
            .then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    next()
                } else {
                    res.status(500).json({ errorMessage: 'Invalid credentials' })
                }
            })
            .catch(err => {
                res.status(401).json({ errorMessage: err.message })
            })

    } else {
        res.status(401).json({ errorMessage: 'Please provide username and password' })
    }
}
