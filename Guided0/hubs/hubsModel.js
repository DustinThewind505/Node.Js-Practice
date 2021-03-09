const knex = require('knex');

const db = require('./data/dbConfig');

module.exports = {
    findAll,
    findByID,
    addHub,
    updateHub,
    deleteHub
}

function findAll() {
    return db('hubs')
}

function findByID(id) {
    return db('hubs').where('id', id).first()
}

function addHub(reqBody) {
    return db('hubs').insert(reqBody)
}

function updateHub(id, reqBody) {
    return db('hubs').where('id', id).update(reqBody)
}

function deleteHub(id) {
    return db('hubs').where('id', id).delete()
}
