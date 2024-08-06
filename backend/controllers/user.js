const User = require("../models/User");

const createUser = async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } else {
    res.json({
      message: "email already used",
      success: false,
    });
  }
};

module.exports = { createUser };
