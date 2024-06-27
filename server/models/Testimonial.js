const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true , connection:'mrloggageTestimonals'}
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
