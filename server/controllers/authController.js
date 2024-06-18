const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;
const User = require("../models/User");

const signup = async (req, res) => {
  res.send("Signup route is working");
};

const signin = async (req, res) => {
  res.send("Signin route is working");
};

module.exports = { signup, signin };
