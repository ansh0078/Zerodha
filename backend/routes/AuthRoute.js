const { Signup, Login } = require("../controllers/AuthController");

const express = require("express");
const userVerification = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", userVerification, Login);

module.exports = router;