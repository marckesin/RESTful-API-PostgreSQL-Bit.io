const express = require("express");
const mountRoutes = require("./routes/index");

const app = express();

const port = process.env.PORT || 3000;

mountRoutes(app);

app.listen(port);

module.exports = app;
