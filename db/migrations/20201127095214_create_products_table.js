
exports.up = function(knex) {
  return knex.schema.createTable("products", productsTable => {
productsTable.increments("key").primary();
productsTable.string("id")
productsTable.string("name").notNullable();
productsTable.string("description").notNullable();
productsTable.json("price").notNullable();
productsTable.string("type").notNullable();
productsTable.string("department").notNullable();
productsTable.string("weight").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("products");
};
