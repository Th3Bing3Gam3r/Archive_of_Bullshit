require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

//html setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

//middleware routes
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Now listening to requests on port ${PORT}`);
  console.log(`http://localhost:${PORT}/`);
});
