const express = require("express");
const mountRoutes = require("./routes/index");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mountRoutes(app);

app.listen(port);

module.exports = app;
