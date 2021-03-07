
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('humans').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('humans').insert([
        {HumanName: 'Deadpool', WerewolfID: 3, VampireID:2},
        {HumanName: 'Abe Lincoln', WerewolfID:5, VampireID: 3},
        {HumanName: 'VanHelsing', WerewolfID: 5, VampireID:2},
        {HumanName: 'Buffy', WerewolfID: 6, VampireID: 4},
      ]);
    });
};
