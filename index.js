const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
app.use(cors());

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.get("/", (req, res) => {
  res.send("recipes are coming");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((singleChef) => singleChef.chefId == id);
  res.send(chef);
});

app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const chefRecipes = recipes.filter((recipe) => recipe.chefId == id);
  res.send(chefRecipes);
});

app.listen(port, () => {
  console.log(`TasteTurkey is running on port ${port}`);
});
