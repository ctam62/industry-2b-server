exports.up = function (knex) {
    return knex.schema
        .createTable("titles", (table) => {
            table.increments("id").primary();
            table.string("title").notNullable();
            table.timestamp("created_at").defaultTo(knex.fn.now());
            table
                .timestamp("updated_at")
                .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
        });
};

exports.down = function (knex) {
    return knex.schema.dropTable("titles");
};
