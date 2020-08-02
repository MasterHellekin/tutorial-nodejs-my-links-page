const express = require("express");
const router = express.Router();

const { isLoggedIn } = require("../lib/auth");
const linksController = require("../controllers/links");

router.get("/add", isLoggedIn, linksController.getAddLinks);

router.post("/add", isLoggedIn, linksController.postAddLinks);

router.get("/", isLoggedIn, linksController.getLinks);

router.get("/delete/:id", isLoggedIn, linksController.getDeleteLink);

router.get("/edit/:id", isLoggedIn, linksController.getEditLink);

router.post("/edit/:id", isLoggedIn, linksController.postEditLink);

module.exports = router;
