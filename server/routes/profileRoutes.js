const express = require("express");
const profileRouter = express.Router();
const { editProfielController, getProfileController } = require("../controllers/profileController");

profileRouter.post("/", getProfileController);
profileRouter.post("/edit-profile", editProfielController);

module.exports = profileRouter;
