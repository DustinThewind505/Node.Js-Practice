
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {name: 'Fido', weight: 15, adopter_id: 1},
        {name: 'Patch', weight: 40, adopter_id: 2},
        {name: 'Bolto', weight: 75, adopter_id: 3}
      ]);
    });
};
