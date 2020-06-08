exports.up = function(knex) {
    return knex.schema.createTable('services', column => {
      column.string('server_name').notNull();
      column.string('contractor_name').notNull();
      column.float('price').notNull();
      column.string('adress').notNull();
      column.date('date').notNull();
      column.boolean('status').notNull();
      column.string('type').notNull();
      column.integer('Nbathrooms').notNull();
      column.integer('rooms').notNull();
      column.integer('server_id').references('server_id').inTable('servers').onDelete('RESTRICT');
      column.integer('contractor_id').references('contractor_id').inTable('contractors').onDelete('RESTRICT');
      column.timestamp('created_at').defaultTo(knex.fn.now());
      column.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('services');
};
  