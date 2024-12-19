const express = require("express");
const res = require("express/lib/response");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const moongo = require("mongoose");
const TodoModel = require('./models/todo')
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

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task
  }).then(result => res.json(result))
  .catch(err => res.json(err))
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
