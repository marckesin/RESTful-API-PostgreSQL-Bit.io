const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/users">/users</a>');
});

router
  .route("/users")
  .get(usersController.userGetAll)
  .post(usersController.userCreate);

router
  .route("/users/:id")
  .get(usersController.userGetById)
  .put(usersController.userUpdate)
  .delete(usersController.userDelete);

router.all("*", (req, res) => {
  res.status(404).send("Endpoint not found.");
});

router.use((err, req, res, next) => {
  res.locals.message = err.message;

  res.status(err.status || 500).send(err.message);
});

module.exports = router;
