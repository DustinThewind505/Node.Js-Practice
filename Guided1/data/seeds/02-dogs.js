exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dogs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {dogName: 'Fido', weight: 15, adopterID: 1},
        {dogName: 'Patch', weight: 40, adopterID: 2},
        {dogName: 'Bolto', weight: 75, adopterID: 3}
      ]);
    });
}