// ajouter le lien avec la BDD, dans harmonia on le fait au niveau des controllers
// Dans Harmonia :
// const tables = require("../../database/tables");

// check the name of getAvailability
const getAllTimeslots = async (req, res, next) => {
    try {
      const timeSlots = await tables.time_slot.getAvailability();
      res.json(timeSlots);
    } catch (err) {
      next(err);
    }
  };
  
  module.exports = {
    getAllTimeslots,
  };
  