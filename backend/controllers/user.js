const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } else {
    console.log(error);

    throw new Error("Email already in use");
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    console.log(error);

    throw new Error("wrong credentials");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);

    throw new Error("Error");
  }
});

module.exports = { createUser, login, getAllUsers };
