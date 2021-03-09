const db = require('../../data/db-config');

module.exports = {
    findAll,
    findByID,
    addVillian,
    updateVillian,
    deleteVillian
}

function findAll() {
    return db('villians')
}

function findByID(id) {
    return db('villians').where('VillianID', id)
}

function addVillian(reqBody) {
    return db('villians').insert(reqBody)
}

function updateVillian(id, reqBody) {
    return db('villians').where('VillianID', id).update(reqBody)
}

function deleteVillian(id) {
    return db('villians').where('VillianID', id).delete()
}
