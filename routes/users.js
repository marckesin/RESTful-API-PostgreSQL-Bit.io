const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/users">/users</a>');
});

router.get("/users", usersController.userGetAll);

router.get("/users/:id", usersController.userGetById);

router.post("/users", usersController.userCreate);

router.put("/users/:id", usersController.userUpdate);

router.delete("/users/:id", usersController.userDelete);

router.use("*", (req, res) => {
  res.status(404).send("Endpoint not found.");
});

module.exports = router;
