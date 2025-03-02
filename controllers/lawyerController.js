// ajouter le lien avec la BDD, dans harmonia on le fait au niveau des controllers
// Dans Harmonia :
// const tables = require("../../database/tables");

const readAllLawyers = async (req, res, next) => {
  try {
    const lawyers = await tables.lawyer.readAll();
    res.json(lawyers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  readAllLawyers,
};

