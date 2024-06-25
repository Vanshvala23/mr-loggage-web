const Testimonial = require("../models/Testimonial");

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().populate(
      "userId",
      "firstName lastName"
    );
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const submitTestimonial = async (req, res) => {
  const testimonial = new Testimonial({
    userId: req.body.userId,
    content: req.body.content,
  });

  try {
    const newTestimonial = await testimonial.save();
    res.status(201).json(newTestimonial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getTestimonials,
  submitTestimonial,
};
