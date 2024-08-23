const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const newUser = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const newUser = await Product.find();

    return res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = { createProduct, getProducts };
