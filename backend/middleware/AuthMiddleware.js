const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, decode) => {
    if (err) {
     return res.json({ status: false })
    } else {
      return res.json({
        status: true,
        user: decoded.id,
      });
    }
  });
}

module.exports = userVerification;