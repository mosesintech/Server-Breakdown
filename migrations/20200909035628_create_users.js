
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.string('name', 10).notNullable().unique();
      tbl.string('email', 30).notNullable().unique();
      tbl.string('avatar', 50).notNullable();
      tbl.string('catchphrase', 100);
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
