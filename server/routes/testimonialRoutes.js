const express = require("express");
const testimonialRouter = express.Router();
const {
  getTestimonials,
  submitTestimonial,
} = require("../controllers/testimonialController");
const auth = require("../middlewares/auth");

testimonialRouter.get("/", auth, getTestimonials);
testimonialRouter.post("/submit", auth, submitTestimonial);

module.exports = testimonialRouter;
