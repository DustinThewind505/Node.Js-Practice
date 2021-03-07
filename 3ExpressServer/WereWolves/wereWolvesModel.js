const db = require('../data/db-config');

module.exports = {
    findAllWereWolves,
    findWereWolfByID,
    addWereWolf,
    updateWereWolf,
    deleteWereWolf
}

function findAllWereWolves() {
    return db('werewolves')
}

function findWereWolfByID(id) {
    return db('werewolves').where({id})
}

function addWereWolf(wereWolf) {
    return db('werewolves').insert(wereWolf)
}

function updateWereWolf(id, changes) {
    return db('werewolves').where({ id }).update(changes)
}

function deleteWereWolf(id) {
    return db('werewolves').where({ id }).delete()
}
