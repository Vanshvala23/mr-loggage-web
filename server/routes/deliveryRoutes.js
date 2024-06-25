const express = require("express");
const deliveryRouter = express.Router();
const { fetchTimeSlots } = require("../controllers/deliveryController");

deliveryRouter.post("/fetch-time-slots", fetchTimeSlots);

module.exports = deliveryRouter;
