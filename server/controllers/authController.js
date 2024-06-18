const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { model } = require("mongoose");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

const signup = async (req, res) => {};

const signin = async (req, res) => {};

module.exports = { signup, signin };
