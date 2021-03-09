const knex = require('knex');

const db = require('../hubs/data/dbConfig');

module.exports = {
    findAll,
    findByID,
    addLesson,
    updateLesson,
    deleteLesson
}

function findAll() {
    return db('lessons')
}

function findByID(id) {
    return db('lessons').where('id', id).first()
}

function addLesson(reqBody) {
    return db('lessons').insert(reqBody)
}

function updateLesson(id, reqBody) {
    return db('lessons').where('id', id).update(reqBody)
}

function deleteLesson(id) {
    return db('lessons').where('id', id).delete()
}
