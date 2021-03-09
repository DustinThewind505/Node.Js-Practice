
exports.up = function(knex) {
  return knex.schema.createTable('adopters', tbl => {
    tbl.increments();
    tbl.string('first_name').notNullable();
    tbl.string('last_name').notNullable();
    tbl.string('email').notNullable();
    tbl.integer('phone_number').notNullable();
  })
  .createTable('dogs', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.integer('weight').notNullable();
    tbl.integer('adopter_id').references('id').inTable('adopters').onDelete('CASCADE').onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dogs').dropTableIfExists('adopters')
};
