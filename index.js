const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json");

app.get("/", (req, res) => {
  res.send("recipes are coming");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.listen(port, () => {
  console.log(`TasteTurkey is running on port ${port}`);
});
