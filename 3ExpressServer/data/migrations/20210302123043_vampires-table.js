const { table } = require("../db-config");

exports.up = function(knex) {
  return knex.schema.createTable('vampires', tbl => {
      tbl.increments();
      tbl.string('VampireName').unique().notNullable();
      tbl.string('VampireWeakness').notNullable();
      tbl.integer('VampireAge');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vampires');
};
