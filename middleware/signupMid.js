const blogger = require("../database/model/blogger");

 function  signupvalidation(req, res, next) {
   console.log(req.body);
  const {firstname, lastname, username, password, city, phone, gender} = req.body;
  
  if (
    !firstname?.trim() ||
    !lastname?.trim() ||
    !username?.trim() ||
    !password ||
    !city?.trim() ||
    !phone?.trim()||
    !gender?.trim()
  ) {
    return res.render("signupPage", {msg: "enter all inputs"});
  }

  if (username.length < 3) {
    return res.render("signupPage", {
      msg: "username must be at least 3 character",
    });
  }
  if (password.length < 8 || password.length >80) {
    return res.render("signupPage", {
      msg: "password is not acceptable",
    });
  }
  blogger.findOne({ username: username.trim() }, (error, exist) => {
    if (error) {
      return res.render("signupPage", { msg: "username is not acceptable" });
    }
    if (exist) {
      return res.render("signupPage", { msg: "username alrady token" });
    }
  });
  blogger.findOne({ phone: phone.trim() }, (error, exist) => {
    if (error) {
      return res.render("signupPage", { msg: "phone is not acceptable" });
    }
    if (exist) {
      return res.render("signipPage", { msg: "phone is not accept" });
    }
  });
  next();
}

module.exports = signupvalidation;
