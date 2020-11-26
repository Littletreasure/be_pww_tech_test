process.env.NODE_ENV = "test";

const express = require("express");
const app = express();
const cors = require("cors");
const apiRouter = require("./routes/apiRouter");
app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("This is a Server Error!!!");
});

module.exports = app;