const express = require("express");
const res = require("express/lib/response");
const app = express();

app.get("/", (req, res) => {
  res.send("!شكرا على المساعدة يا عرص");
});
app.get("/home", (req, res) => {
  res.send(" يا عرص");
});
app.post("/post", (req, res) => {
  res.send("hell");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
