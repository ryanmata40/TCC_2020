
exports.up = function(knex) {
  return knex.schema.createTable('users', column => {
    column.increments('id').primary()
    column.string('name').notNull()
    column.string('email').notNull().unique()
    column.string('password_hash').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
