
exports.up = function(knex) {
    return knex.schema.createTable('users', column => {
      column.integer('cpf').primary()
      column.string('name').notNull()
      column.string('email').notNull().unique()
      column.string('password_hash').notNull()
      column.integer('number').notNull()
      column.string('adress').notNull()
      column.date('date_of_birth').notNull()
      column.timestamp('created_at').defaultTo(knex.fn.now());
      column.timestamp('updated_at').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users')
  };
  