const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema.createTable('werewolves', tbl => {
      tbl.increments();
      tbl.string('WereWolfName').unique().notNullable();
      tbl.string('WereWolfWeakness').notNullable();
      tbl.integer('WereWolfAge');
  })
  .createTable('humans', tbl => {
      tbl.increments();
      tbl.string('HumanName');
      tbl.integer('WereWolfID').references('id').inTable('werewolves').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('VampireID').references('id').inTable('vampires').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('humans').dropTableIfExists('werewolves');
};

