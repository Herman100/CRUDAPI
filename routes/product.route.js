const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  getProductById,
  deleteProduct,
} = require("../controllers/product.controller");

// Create a new product
router.post("/", createProduct);

// Get all products
router.get("/", getProducts);

// Update a product
router.put("/", updateProduct);

// Get a single product
router.get("/:id", getProductById);

// Delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
