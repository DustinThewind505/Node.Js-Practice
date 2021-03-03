
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vampires').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vampires').insert([
        {Name: 'Gangrel', Weakness: 'Edge & Christian', Age: 59},
        {Name: 'Dracula', Weakness: 'sunlight', Age: 590},
        {Name: 'Edward', Weakness: 'girls', Age: 137},
        {Name: 'Spike', Weakness: 'girls', Age: 168},
        {Name: 'Cheech', Weakness: 'crosses', Age: 74},
        {Name: 'Lilith', Weakness: 'lasers', Age: 8000}
      ]);
    });
};
