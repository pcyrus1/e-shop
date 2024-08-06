const express = require("express");
const { createProduct, getProducts } = require("../controllers/product");
const { authUser } = require("../middlewares/authUser");
const router = express.Router();

router.post("/", createProduct);
router.get("/", authUser, getProducts);

module.exports = router;
