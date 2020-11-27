const connection = require("../db/connection");

const fetchProducts = query => {
  let sortBy = "name";
  if (query.sort_by) sortBy = query.sort_by;
  let sortOrder = "asc";
  if (query.order === "desc") sortOrder = "desc";
  return connection
  .select("*")
  .from("products")
  .orderBy(sortBy, sortOrder)
  .then(products => { 
    return products;
  });
};

const fetchProductsByType = query => {
  let sortBy = "name";
  if (query.sort_by) sortBy = query.sort_by;
  if (query.sortby === "price") sortBy = "price.value";
  let sortOrder = "asc";
  if (query.order === "desc") sortOrder = "desc";
  return connection
  .select("products.*")
  .from("products")
  .groupBy("products.type")
  .orderBy(sortBy, sortOrder)
  .then(products => {
    return products;
  })
}
module.exports = {fetchProducts, fetchProductsByType};