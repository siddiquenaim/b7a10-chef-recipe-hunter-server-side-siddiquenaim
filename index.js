const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("recipes are coming");
});

app.listen(port, () => {
  console.log(`TasteTurkey is running on port ${port}`);
});
