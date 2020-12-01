const connection = require("../db/connection");

const fetchProducts = query => {
  let sortBy = "name";
  if (query.sort_by) sortBy = query.sort_by;
  if (query.sort_by === "price") sortBy = "price.value";
  let sortOrder = "asc";
  if (query.order === "desc") sortOrder = "desc";
  return connection
  .select("*")
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



module.exports = {fetchProducts};