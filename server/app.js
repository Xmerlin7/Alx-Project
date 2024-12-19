const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json())
const moongo = require("mongoose");
moongo
  .connect(
    "mongodb+srv://seifahmedjr7:WhGZw792pHX8xAHP@cluster0.6trnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("loged successfully to DB");
  })
  .catch((e) => {
    console.log("couldn't connect tho the DB", e);
  });
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome Home, Mate");
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
