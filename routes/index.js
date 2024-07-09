var express = require('express');
var router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/user");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello World', user: req.user });
});



module.exports = router;

