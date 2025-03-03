const tables = require("../database/tables");

const getAllFields = async (req, res, next) => {
    try {
      const fields = await tables.field.readAll();
      res.json(fields);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    getAllFields,
  };
  