const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema.createTable('vampires', tbl => {
      tbl.increments();
      tbl.string('Name').unique().notNullable();
      tbl.string('Weakness').notNullable();
      tbl.integer('Age');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vampires');
};
