const express = require("express");
const { createUser, login, getAllUsers } = require("../controllers/user");
const router = express.Router();
const { checkAuth } = require("../middlewares/checkAuth");

router.post("/register", createUser);
router.post("/login", login);
router.get("/getAll", checkAuth, getAllUsers);

module.exports = router;
