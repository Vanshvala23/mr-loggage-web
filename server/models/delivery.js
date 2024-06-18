const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      required: true,
      enum: ["Pending", "In Transit", "Delivered", "Cancelled"],
      default: "Pending",
    },
    expectedDeliveryDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;
