const express = require("express");
const { createUser, login, getAllUsers } = require("../controllers/user");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);
router.get("/getAll", getAllUsers);

module.exports = router;
