const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema.createTable('werewolves', tbl => {
      tbl.increments();
      tbl.string('Name').unique().notNullable();
      tbl.string('Weakness').notNullable();
      tbl.integer('Age');
  })
  .createTable('humans', tbl => {
      tbl.increments();
      tbl.string('Name');
      tbl.integer('WerewolfID').references('id').inTable('werewolves').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('VampireID').references('id').inTable('vampires').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('werewolves').dropTableIfExists('humans');
};

