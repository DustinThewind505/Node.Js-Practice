
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('vampires').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vampires').insert([
        {VampireName: 'Gangrel', VampireWeakness: 'Edge & Christian', VampireAge: 59},
        {VampireName: 'Dracula', VampireWeakness: 'sunlight', VampireAge: 590},
        {VampireName: 'Edward', VampireWeakness: 'girls', VampireAge: 137},
        {VampireName: 'Spike', VampireWeakness: 'girls', VampireAge: 168},
        {VampireName: 'Cheech', VampireWeakness: 'crosses', VampireAge: 74},
        {VampireName: 'Lilith', VampireWeakness: 'lasers', VampireAge: 8000}
      ]);
    });
};
