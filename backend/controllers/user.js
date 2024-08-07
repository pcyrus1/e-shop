const expressAsyncHandler = require("express-async-handler");
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

const login = ayncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json(findUser);
  } else {
    throw new Error("wrong credentials");
  }
});

module.exports = { createUser, login };
