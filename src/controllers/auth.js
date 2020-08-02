const passport = require("passport");

exports.getSignup = (req, res, next) => {
  res.render("auth/signup");
};

exports.postSignup = passport.authenticate("local.signup", {
  successRedirect: "/profile",
  failureRedirect: "/signup",
  failureFlash: true,
});

exports.getLogin = (req, res, next) => {
  res.render("auth/login");
};

exports.postLogin = passport.authenticate("local.login", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true,
});

exports.getLogout = (req, res, next) => {
  req.logOut();
  res.redirect("/login");
};

exports.getProfile = (req, res, next) => {
  res.render("profile");
};
