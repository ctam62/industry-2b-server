exports.up = function (knex) {
    return knex.schema.createTable('services', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('logo').defaultTo("/images/netflix.svg");
      table.string('description').nullable();
    });
  };
  
  
  exports.down = function (knex) {
    return knex.schema.dropTable('services');
  };