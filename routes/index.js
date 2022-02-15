const userRoute = require("./users");
const statusRote = require("./status");

module.exports = app => {
  app.use(userRoute);
  app.use(statusRote);
};
