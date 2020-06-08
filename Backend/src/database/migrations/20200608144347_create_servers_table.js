exports.up = function(knex) {
    return knex.schema.createTable('servers', column => {
      column.increments('server_id').primary();
      column.timestamp('created_at').defaultTo(knex.fn.now());
      column.timestamp('updated_at').defaultTo(knex.fn.now());
      column.integer('user_cpf').references('cpf').inTable('users').onDelete('CASCADE');
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('servers');
};
  