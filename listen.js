const app = require("./app");
const express = require("express");
const { PORT = 9090 } = process.env;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT} ...`);
});