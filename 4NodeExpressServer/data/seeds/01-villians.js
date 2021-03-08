
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('villians').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('villians').insert([
        {VillianName: 'Doctor Doom', VillianRealName: 'Victor von Doom', HomeTown: 'Latveria', FirstAppearance: 'Fantastic Four #5 (1962)'},
        {VillianName: 'Sabertooth', VillianRealName: 'Victor Creed', HomeTown: 'Pre-British Columbia, Canada', FirstAppearance: 'Iron Fist #14 (1977)'},
        {VillianName: 'Crossbones', VillianRealName: 'Brock Rumlow', HomeTown: 'USA', FirstAppearance: 'Captain America #359 (1989)'},
        {VillianName: 'Doctor Octopus', VillianRealName: 'Otto Gunther Octavious', HomeTown: 'Schenectady, New York', FirstAppearance: 'Amazing Spider-Man #3 (1963)'},
        {VillianName: 'Magneto', VillianRealName: 'Max Eisenhardt', HomeTown: 'Germany', FirstAppearance: 'The X-Men #1 (1963)'},
        {VillianName: 'Kingpin', VillianRealName: 'Wilson Grant Fisk', HomeTown: 'New York City', FirstAppearance: 'The Amzing Spider-Man #50 (1967)'}
      ]);
    });
};
