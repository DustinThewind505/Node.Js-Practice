const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAll,
    findBy,
    findById,
    addDog,
    updateDog,
    deleteDog
}


function findAll() {
    return db('dogs')
}

function findBy(filter) {
    return db('dogs').where(filter).orderBy('id')
}

function findById(id) {
    return db('dogs').where('dogID', id).first()
}

function addDog(reqBody) {
    return db('dogs').insert(reqBody)
}

function updateDog(id, reqBody) {
    return db('dogs').where('dogID', id).update(reqBody)
}

function deleteDog(id) {
    return db('dogs').where('dogID', id).delete()
}
