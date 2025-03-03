// ajouter le lien avec la BDD, dans harmonia on le fait au niveau des controllers
// Dans Harmonia :
// const tables = require("../../database/tables");

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
  