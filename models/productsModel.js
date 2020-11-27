const connection = require("../db/connection");

const fetchProducts = query => {
  let sortBy = "name";
  if (query.sort_by) sortBy = query.sort_by;
  let sortOrder = "asc";
  if (query.order === "desc") sortOrder = "desc";
  return connection
  .select("products.*")
  .from("products")
  .groupBy("key")
  .orderBy(sortBy, sortOrder)
.modify(sqlQuery => {
      if (query.type) sqlQuery.where("products.type", query.type);

    })
  .then(products => {
    if (query.type) {
    return connection("products")
            .select("*")
            .where("type", query.type)
            .orderBy(sortBy, sortOrder)
            .then(products => {
              return products;
            })
  } return products
})
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
  .groupBy("type")
  .orderBy(sortBy, sortOrder)
  .modify(sqlQuery => {
      if (query.type) sqlQuery.where("products.type", query.type);

    })
  .then(products => {
    return connection("products")
            .select("*")
            .where("type", query.type)
            .then(products => {
              
              
              return [];
  })
})
};

module.exports = {fetchProducts, fetchProductsByType};