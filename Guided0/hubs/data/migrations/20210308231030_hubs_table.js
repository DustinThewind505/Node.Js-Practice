
exports.up = function(knex) {
  return knex.schema.createTable('lessons', tbl => {
      tbl.increments();
      tbl.string('name');
      tbl.string('cohort');
  })
  .createTable('hubs', tbl => {
    tbl.increments();
    tbl.string('name');
    tbl.integer('lessonID').references('id').inTable('lessons').onDelete('CASCADE').onUpdate('CASCADE');
    tbl.string('cohort');
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hubs').dropTableIfExists('lessons');
};
