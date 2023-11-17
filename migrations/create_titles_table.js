exports.up = function (knex) {
    return knex.schema
        .createTable("titles", (table) => {
            table.increments("id").primary();
            table
                .integer("service_id")
                .unsigned()
                .references("services.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            table.string("title").notNullable();
            table.string("genres").notNullable();
            table.integer("rank").notNullable();
            table.string("img").defaultTo("https://www.thesoapopera.com/cdn/shop/products/The-Soap-Opera-Rubber-Ducks-Colors-Yellow_02cd30bb-0dbd-4fdc-8d7c-6ee1be5a04e8_590x.jpg?v=1613344659");
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table
                .timestamp("updated_at")
                .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("titles");
};
