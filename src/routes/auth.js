const express = require("express");
const router = express.Router();

const { isLoggedIn, isNotLoggedIn } = require("../lib/auth");
const authController = require("../controllers/auth");

router.get("/signup", isNotLoggedIn, authController.getSignup);

router.post("/signup", isNotLoggedIn, authController.postSignup);

router.get("/login", isNotLoggedIn, authController.getLogin);

router.post("/login", isNotLoggedIn, authController.postLogin);

router.get("/profile", isLoggedIn, authController.getProfile);

router.get("/logout", isLoggedIn, authController.getLogout);

module.exports = router;
