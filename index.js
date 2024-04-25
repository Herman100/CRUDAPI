const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/student.model");
const Product = require("./models/product.model");
const studentRoute = require("./routes/student.route");
const productRoute = require("./routes/product.route");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Becoming a full stack developer is a journey! Welcome home!");
});

app.use("/api/students", studentRoute);
app.use("/api/products", productRoute);

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
