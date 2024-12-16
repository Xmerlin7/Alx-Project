const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome Home, Mate")
});
app.get("/home", (req, res) => {
  res.send(" يا عرص");
});
app.post("/post", (req, res) => {
  res.send(`hello ${req.body.name} your age is ${req.query.age}`);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
