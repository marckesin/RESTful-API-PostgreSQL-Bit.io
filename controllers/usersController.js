const { v4: uuidv4 } = require("uuid");
const db = require("../db/database.config");

exports.userGetAll = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT uuid, username FROM "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user"',
      [],
    );
    return res.status(200).send(rows);
  } catch (error) {
    next(error);
  }
};

exports.userGetById = async (req, res, next) => {
  const uuid = req.params.id;

  try {
    const { rows, rowCount } = await db.query(
      'SELECT uuid, username FROM "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user" WHERE uuid = $1',
      [uuid],
    );

    if (rowCount) {
      return res.status(200).send(rows[0]);
    }
    return res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

exports.userCreate = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const { rowCount } = await db.query(
      'INSERT INTO "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user"(uuid, username, password) VALUES($1, $2, $3)',
      [uuidv4(), username, password],
    );

    if (rowCount) {
      return res.status(201).send("User created.");
    }
    return res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

exports.userUpdate = async (req, res, next) => {
  const uuid = req.params.id;
  const { username, password } = req.body;

  try {
    const { rowCount } = await db.query(
      'UPDATE "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user" SET username = $1, password = $2 WHERE uuid = $3',
      [username, password, uuid],
    );

    if (rowCount) {
      return res.status(200).send("User updated.");
    }
    return res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};

exports.userDelete = async (req, res, next) => {
  const uuid = req.params.id;

  try {
    const { rowCount } = await db.query(
      'DELETE FROM "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user" WHERE uuid = $1',
      [uuid],
    );

    if (rowCount) {
      return res.status(200).send("User deleted.");
    }
    return res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};
