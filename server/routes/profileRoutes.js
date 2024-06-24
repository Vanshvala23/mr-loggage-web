const express = require("express");
const profileRouter = express.Router();
const auth = require("../middlewares/auth");
const {
  editProfielController,
  getProfileController,
} = require("../controllers/profileController");

profileRouter.post("/", auth, getProfileController);
profileRouter.post("/edit-profile", auth, editProfielController);

module.exports = profileRouter;
