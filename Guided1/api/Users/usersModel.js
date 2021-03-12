const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAll,
    findBy,
    findByID,
    addUser,
    updateUser,
    deleteUser
}

function findAll() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).orderBy("userID")
}

function findByID(id) {
    return db('users').where('userID', id).first()
}

function addUser(reqBody) {
    return db('users').insert(reqBody)
}

function updateUser(id, reqBody) {
    return db('users').where('userID', id).update(reqBody)
}

function deleteUser(id) {
    return db('users').where('userID', id).delete()
}
