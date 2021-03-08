
exports.up = function(knex) {
  return knex.schema.createTable('villians', tbl => {
    tbl.increments('VillianID');
    tbl.string('VillianName').notNullable();
    tbl.string('VillianRealName').notNullable();
    tbl.string('HomeTown');
    tbl.text('FirstAppearance');
  })
  .createTable('heros', tbl => {
      tbl.increments('HeroID');
      tbl.string('HeroName').notNullable();
      tbl.string('HeroRealName').notNullable();
      tbl.string('HomeTown');
      tbl.integer('VillianNemesis').references('VillianID').inTable('villians').onDelete('CASCADE').onUpdate('CASCADE'); 
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('heros').dropTableIfExists('villians');
};
