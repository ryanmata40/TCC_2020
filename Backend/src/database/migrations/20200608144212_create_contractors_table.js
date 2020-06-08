exports.up = function(knex) {
    return knex.schema.createTable('contractors', column => {
      column.increments('contractor_id').primary();
      column.timestamp('created_at').defaultTo(knex.fn.now());
      column.timestamp('updated_at').defaultTo(knex.fn.now());
      column.integer('user_cpf').references('cpf').inTable('users').onDelete('CASCADE');
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('contractors');
};
  