
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('werewolves').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('werewolves').insert([
        {Name: 'Jacob', Weakness: 'Girls', Age: 15},
        {Name: 'Jack Nicholson', Weakness: 'sunlight', Age: 590},
        {Name: 'Edward', Weakness: 'girls', Age: 137},
        {Name: 'Spike', Weakness: 'girls', Age: 168},
        {Name: 'Cheech', Weakness: 'crosses', Age: 74},
        {Name: 'Lilith', Weakness: 'lasers', Age: 8000}
      ]);
    });
};
