
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hubs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hubs').insert([
        {name: 'A', lessonId: 1, cohort: 'Web27'},
        {name: 'B', lessonId: 2, cohort: 'Web28'},
        {name: 'C', lessonId: 3, cohort: 'Web29'},
      ]);
    });
};
