const User = require("../models/user");

exports.form = (req, res) => {
  res.render("loginForm", { title: "Login" });
};

exports.submit = (req, res, next) => {
  User.authentificate(req.body.loginForm, (error, data) => {
    if (error) return next(error);
    if (!data) {
      console.log("Логин или пароль не верны");
      res.redirect("back");
    } else {
      req.session.userEmail = data.email;
      req.session.userName = data.name;
      res.redirect("/");
    }
  });
};

exports.logout = function (req, res, next) {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
};
