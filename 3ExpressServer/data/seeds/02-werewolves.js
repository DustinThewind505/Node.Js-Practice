
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('werewolves').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('werewolves').insert([
        {WereWolfName: 'Jacob', WereWolfWeakness: 'girls', WereWolfAge: 15},
        {WereWolfName: 'Jack Nicholson', WereWolfWeakness: 'sunlight', WereWolfAge: 69},
        {WereWolfName: 'Rob Schnieder', WereWolfWeakness: 'goats', WereWolfAge: 50},
        {WereWolfName: 'London Guy', WereWolfWeakness: 'girls', WereWolfAge: 29},
        {WereWolfName: 'Lucious', WereWolfWeakness: 'girls', WereWolfAge: 1074},
        {WereWolfName: 'Michael Jacson', WereWolfWeakness: 'mean words', WereWolfAge: 60}
      ]);
    });
};
