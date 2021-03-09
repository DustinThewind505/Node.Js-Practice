const db = require('../db-config');

module.exports = {
    findAll,
    findById,
    addUser,
    deleteUser
}

function findAll() {
    return db('users')
}

function findById(username) {
    return db('users').where('username', username).first()
}

function addUser(reqBody) {
    return db('users').insert(reqBody)
}

function deleteUser(id) {
    return db('users').where('id', id).delete()
}
