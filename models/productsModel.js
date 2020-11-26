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

module.exports = {fetchProducts};