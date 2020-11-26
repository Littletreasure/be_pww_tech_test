const apiRouter = require("express").Router();
const productsRouter = require("./productsRouter");

apiRouter.use("/products", productsRouter);

module.exports = apiRouter