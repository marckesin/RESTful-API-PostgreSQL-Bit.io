const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/users", usersController.userGetAll);

router.get("/users/:id", usersController.userGetById);

module.exports = router;
