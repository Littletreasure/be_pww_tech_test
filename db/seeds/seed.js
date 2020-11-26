const {productsData} = require("../data");

exports.seed = function(knex) {
  const productsInsertions = knex("products")
  .insert(productsData)
  .returning("*");
  return knex.migrate
  .rollback()
  .then(() => knex.migrate.latest())
  .then(() => {
    return productsInsertions;
  })
};