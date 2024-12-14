const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  res.send("!شكرا على المساعدة يا عرص");
});
app.get("/home", (req, res) => {
  res.send(" يا عرص");
});
app.post("/post/:n1/:n2", (req, res) => {
  res.send(`the numbers are ${req.params.n1} and ${req.params.n2}`);
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
