const express = require("express");
const authRegister = require("../controllers/auth.controller");
const authLogin = require("../controllers/auth.controller");

const router = express.Router();
router.post("/register", authRegister.registerUser);
router.post("/login", authLogin.loginUser);

module.exports = router;
