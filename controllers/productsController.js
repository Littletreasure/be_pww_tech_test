const {fetchProducts, fetchProductsByType} = require("../models/productsModel");

const getProducts = (req, res, next) => {
  fetchProducts(req.query)
  .then(products => {
    res.status(200).send({products});
  })
  .catch(next);
};

const getProductsByType = (req, res, next) => {
  fetchProductsByType(req.query)
  .then(products => {
    res.status(200).send({products});
  })
  .catch(next)
}
module.exports = {getProducts, getProductsByType};