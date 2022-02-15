const db = require("../db/database.config");

exports.userGetAll = async (req, res, next) => {
  try {
    const { rows } = await db.query(
      'SELECT * FROM "marckesin/RESTful-API-PostgreSQL-Bit.io"."application_user"',
      [],
    );
    res.status(200).send(rows[0]);
  } catch (error) {
    next(error);
  }
};
