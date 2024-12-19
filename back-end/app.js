import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import moongoose from "mongoose";
import { Book } from "./models/booksModel.js";
const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Book sotre with MERN ");
});

moongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, (req, res) => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
