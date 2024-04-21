const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/home", (req, res) => {
  res.send("Becoming a full stack developer is a journey! Welcome home!");
});

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database!");
    app.listen(3000, () => {
      console.log(
        "Server is listening on port 3000. Ready to accept requests! We are live!"
      );
    });
  })
  .catch((err) => {
    console.log("Failed to connect to the database!", err);
  });
