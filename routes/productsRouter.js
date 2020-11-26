const productsRouter = require("express").Router();
const {getProducts} = require("../controllers/productsController");

productsRouter.route("/").get(getProducts);

module.exports = productsRouter;