
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('heros').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('heros').insert([
        {HeroName: 'Captain America', HeroRealName: 'Steve Rodgers', HomeTown: 'New York City', VillianNemesis: 3},
        {HeroName: 'Dazzler', HeroRealName: 'Allison Blaire', HomeTown: 'Long Island, New York', VillianNemesis: 5},
        {HeroName: 'Spider Man', HeroRealName: 'Peter Parker', HomeTown: 'New York City', VillianNemesis: 4}
      ]);
    });
};
