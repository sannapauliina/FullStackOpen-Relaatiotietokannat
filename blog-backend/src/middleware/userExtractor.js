const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userExtractor = async (req, res, next) => {
  try {
    if (!req.token) {
      return res.status(401).json({ error: "token missing" });
    }

    const decodedToken = jwt.verify(req.token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).json({ error: "token invalid" });
    }

    const user = await User.findByPk(decodedToken.id);
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userExtractor;
