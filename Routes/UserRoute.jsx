const express = require("express");
const router = express.Router();

const { registerController } = require("../Controllers/UserController.jsx");

//Create new user
router.post("/createUser", registerController);

module.exports = router;
