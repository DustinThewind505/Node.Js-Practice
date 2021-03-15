module.exports = function restricted(req, res, next) {
    // if(req.session) {
        next()
    // } else {
    //     res.send('You shall not pass!')
    // }
}