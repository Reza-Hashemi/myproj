const express = require("express");
const router = express.Router();
const blogger = require("../database/model/blogger");
const  signupvalidation  = require("../middleware/signupMid");

router.get("/", (req, res) =>{
  res.render("signupPage", {msg: null})
})

router.post("/", signupvalidation,(req, res) => {
  const NEW_BLOGGER = new blogger({
    username: req.body.username,
    lastname: req.body.lastname,
    firstname: req.body.firstname,
    password: req.body.password,
    phone: req.body.phone,
    gender: req.body.gender,
    city: req.body.city,
    role: "blogger",
  });
  NEW_BLOGGER.save((err, user) => {
    if (err) {
      return res.render("signupPage", {msg: "username not created"})
    }

    return res.render("signupPage", {msg: "created"})
  });
});

module.exports = router;
