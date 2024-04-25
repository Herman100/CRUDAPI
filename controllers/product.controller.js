const Product = require("../models/product.model");

// Create a new product
const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(201).send("Product created successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const query = req.body.query;
    const product = await Product.find(query);
    if (product === null) {
      return res.status(404).send("Product not found!");
    }
    await Product.findOne(req.body.query, req.body.update, {
      new: true,
    });
    res.status(201).send("Product updated successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product === null) {
      return res.status(404).send("Product not found!");
    }
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product === null) {
      return res.status(404).send("Product not found!");
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send("Product deleted successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  getProductById,
  deleteProduct,
};
