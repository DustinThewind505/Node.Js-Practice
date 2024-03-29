exports.up = function (knex) {
  return knex.schema.createTable('roles', tbl => {
    tbl.increments('roleID');
    tbl.string('roleName').notNullable().unique()
  })
    .createTable('users', tbl => {
      tbl.increments('userID');
      tbl.string('username').unique().notNullable();
      tbl.string('password').notNullable();
      tbl.integer('userRole').unsigned().references('roleID').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE')
    })
    .createTable('adopters', tbl => {
      tbl.increments('adopterID');
      tbl.string('adopterName').unique().notNullable();
      tbl.integer('phoneNumber').notNullable();
    })
    .createTable('dogs', tbl => {
      tbl.increments('dogID');
      tbl.string('dogName').unique().notNullable();
      tbl.integer('weight').notNullable();
      tbl.integer('adopterID').unsigned().references('adopterID').inTable('adopters').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('dogs').dropTableIfExists('adopters').dropTableIfExists('users')
};
