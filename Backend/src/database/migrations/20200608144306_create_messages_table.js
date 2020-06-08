exports.up = function(knex) {
    return knex.schema.createTable('messages', column => {
      column.string('content').notNull();
      column.integer('server_id').references('server_id').inTable('servers').onDelete('CASCADE');
      column.integer('contractor_id').references('contractor_id').inTable('contractors').onDelete('CASCADE');
      column.timestamp('created_at').defaultTo(knex.fn.now());
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('messages');
};
  