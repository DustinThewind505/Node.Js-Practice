const db = require('../../data/db-config');

module.exports = {
  findAll,
  findBy,
  addAdopter,
  updateAdopter,
  deleteAdopter
}

function findAll() {
  return db('adopters')
}

function findBy(name) {
  return db('adopters').where('first_name', name).first()
}

function addAdopter(reqBody) {
  return db('adopters').insert(reqBody)
}

function updateAdopter(name, reqBody) {
  return db('adopters').where('first_name', name).update(reqBody)
}

function deleteAdopter(name) {
  return db('adopters').where('first_name', name).delete()
}
