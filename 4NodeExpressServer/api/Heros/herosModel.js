const db = require('../../data/db-config');

module.exports = {
    findAll,
    findByID,
    addHero,
    updateHero,
    deleteHero
}

function findAll() {
    return db('heros')
}

function findByID(id) {
    return db('heros').where('HeroID', id).join('villians', 'heros.VillianNemesis', 'villians.VillianID').select('heros.HeroID', 'heros.HeroName', 'heros.HeroRealName', 'heros.HomeTown', 'villians.VillianName')
}

function addHero(reqBody) {
    return db('heros').insert(reqBody)
}

function updateHero(id, reqBody) {
    return db('heros').where('HeroID', id).update(reqBody)
}

function deleteHero(id) {
    return db('heros').where('HeroID', id).delete()
}
