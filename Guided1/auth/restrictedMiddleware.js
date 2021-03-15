const jwt = require('jsonwebtoken')

module.exports = function restricted(req, res, next) {

    const token = req.headers.authorization;
    const secret = process.env.JWT_SECRET || 'Pirates';

    if(token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if(err){
                res.status(401).json({errorMessage: err.message})
            } else {
                req.jwt = decodedToken;

                if(req.jwt.userRole === 1){
                    next()
                } else {
                    res.status(401).json({errorMessage: 'Invalid access'})
                }
            }
        })
    } else {
        res.status(401).json({errorMessage: 'Invalid credentials'})
    }
}
