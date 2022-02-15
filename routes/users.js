const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/users", usersController.userGetAll);

module.exports = router;
