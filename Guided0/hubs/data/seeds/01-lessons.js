
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('lessons').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('lessons').insert([
        {name: 'Apple', cohort: 'Web27'},
        {name: 'Banana', cohort: 'Web28'},
        {name: 'Cherry', cohort: 'Web29'},
      ]);
    });
};
