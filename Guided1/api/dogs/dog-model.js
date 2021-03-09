const db = require('../../data/db-config');

module.exports = {
  findAll,
  findBy,
  addDog,
  updateDog,
  deleteDog
}

function findAll() {
  return db('dogs')
}

function findBy(name) {
  return db('dogs').where('name', name).first()
}

function addDog(reqBody) {
  return db('dogs').insert(reqBody)
}

function updateDog(name, reqBody) {
  return db('dogs').where('name', name).update(reqBody)
}

function deleteDog(name) {
  return db('dogs').where('name', name).delete()
}

// module.exports = {
//   findAll() {
//     // SELECT * FROM dogs;
//     return Promise.resolve(dogs)
//   },

//   findById(name) {
//     // SELECT * FROM dogs WHERE id = 1;
//     const dog = dogs.find(d => d.name === name)
//     return Promise.resolve(dog)
//   },

//   create({ name, weight }) {
//     // INSERT INTO dogs (id, name, weight, adopter_id) VALUES ('xyz', 'Foo', 10, NULL);
//     const newDog = { id: shortid.generate(), name, weight, adopter_id: null }
//     dogs.push(newDog)
//     return Promise.resolve(newDog)
//   },

//   update(name, changes) {
//     // UPDATE dogs SET name = 'Foo', weight = 9, adopter_id = 'abc' WHERE id = 1;
//     const dog = dogs.find(dog => dog.name === name)
//     if (!dog) return Promise.resolve(null)

//     const updatedDog = { ...dog, name: req.body.name }
//     dogs = dogs.map(d => (d.name === name) ? updatedDog : d)
//     return Promise.resolve(updatedDog)
//   },

//   delete(name) {
//     // DELETE FROM dogs WHERE name = 1;
//     const dog = dogs.find(dog => dog.name === name)
//     if (!dog) return Promise.resolve(null)

//     dogs = dogs.filter(d => d.name !== name)
//     return Promise.resolve(dog)
//   }
// }
