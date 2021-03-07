const db = require('../data/db-config');

module.exports = {
    findAllHumans,
    findHumanByID,
    addHuman,
    updateHuman,
    deleteHuman
}

function findAllHumans() {
    return db('humans')
}

function findHumanByID(id) {
    return db('humans').where({id})
}

function addHuman(human) {
    return db('humans').insert(human)
}

function updateHuman(id, changes) {
    return db('humans').where({ id }).update(changes)
}

function deleteHuman(id) {
    return db('humans').where({ id }).delete()
}
