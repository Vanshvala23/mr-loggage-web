const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  societyAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
});

const deliverySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  smallquantity: {
    type: Number,
    required: true,
    min: 0,
  },
  mediumquantity: {
    type: Number,
    required: true,
    min: 0,
  },
  largequantity: {
    type: Number,
    required: true,
    min: 0,
  },
  deliveryAddress :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "addressSchema",
    required: true,
  },
  trainNumber: {
    type: String,
    required: true,
  },
  PNR: {
    type: String,
    required: true,
  },
  coachNumber: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: Date,
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
}, { timestamps: true });

const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;