const knex = require('knex');

const db = require('../../data/db-config');

module.exports = {
    findAll,
    findBy,
    findById,
    addAdopter,
    updateAdopter,
    deleteAdopter
}


function findAll() {
    return db('adopters')
}

function findBy(filter) {
    return db('adopters').where(filter).orderBy("id")
}

function findById(id) {
    return db('adopters').where('adopterID', id).first()
}

function addAdopter(reqBody) {
    return db('adopters').insert(reqBody)
}

function updateAdopter(id, reqBody) {
    return db('adopters').where('adopterID', id).update(reqBody)
}

function deleteAdopter(id) {
    return db('adopters').where('adopterID', id).delete()
}
