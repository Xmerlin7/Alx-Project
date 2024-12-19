import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import moongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Book sotre with MERN stack");
});
app.listen(PORT, (req, res) => {
  console.log(`App is listening on port: ${PORT}`);
});
