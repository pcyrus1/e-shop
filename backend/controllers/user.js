const User = require("../models/User");
const ayncHandler = require("express-async-handler");

const createUser = ayncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } else {
    throw new Error("Email already in use");
  }
});

module.exports = { createUser };
