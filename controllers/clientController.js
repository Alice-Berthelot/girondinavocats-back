const tables = require("../database/tables");

const createClient = async (req, res, next) => {
  const client = req.body;
  try {
    const insertId = await tables.client.create(client);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
    createClient,
};
