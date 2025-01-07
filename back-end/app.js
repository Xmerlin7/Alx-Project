import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"; // Fix the typo here
import { Book } from "./models/booksModel.js";

const app = express();
app.use(express.json());
// Set strictQuery to false to handle the deprecation warning
mongoose.set("strictQuery", false);

// Define a route for the root URL
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Book store with MERN");
});

// Route for saving a new book
app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Connect to the MongoDB database and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to DB");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if the connection fails
  });
