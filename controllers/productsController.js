const {fetchProducts} = require("../models/productsModel");

const getProducts = (req, res, next) => {
  fetchProducts(req.query)
  .then(products => {
    res.status(200).send({products});
  })
  .catch(next);
};


module.exports = {getProducts};