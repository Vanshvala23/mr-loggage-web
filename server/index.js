const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/authRoutes");
const profileRouter = require("./routes/profileRoutes");
const testimonialRouter = require("./routes/testimonialRoutes");
const deliveryRouter = require("./routes/deliveryRoutes");
// const getTrainLocation = require('./routes/TrainLocation');


mongoose.connect("mongodb+srv://kartik:mrloggagekartik@mrloggage.r4ejgme.mongodb.net",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

try {
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("Error while connecting to MongoDB", err);
  console.log("Exiting the process");
}

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/testimonial", testimonialRouter);
app.use("/api/delivery", deliveryRouter);
// app.use("/api/train", getTrainLocation);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
