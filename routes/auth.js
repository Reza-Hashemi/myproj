var express = require('express');
var router = express.Router();
const signup = require("./signup")


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use("/signup", signup)


module.exports = router;
