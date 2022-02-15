const db = require("../db/database.config");

exports.userGetAll = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT uuid, username FROM "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user"',
      [],
    );
    res.status(200).send(rows[0]);
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
    res.sendStatus(404);
  } catch (error) {
    next(error);
  }
};
