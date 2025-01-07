import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"; // Fix the typo here
import { Book } from "./models/booksModel.js";

const app = express();

// Set strictQuery to false to handle the deprecation warning
mongoose.set('strictQuery', false);

// Define a route for the root URL
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Book store with MERN");
});

// Connect to the MongoDB database and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => { // Remove unused parameters (req, res) in app.listen
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
