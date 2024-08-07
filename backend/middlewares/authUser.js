const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getuser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  }).catch((error) => error);
  return user;
};

const authUser = async (req, res, next, userId) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const authUser = jwt.verify(token, "my-secret");
    req.auth = await getuser(authUser.userId);
    req.auth.model = "user";
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized", error });
  }
};

module.exports = { authUser };
