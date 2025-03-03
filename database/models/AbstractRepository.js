const database = require("../../config/db");

class AbstractRepository {
  constructor({ table }) {

    if (this.constructor === AbstractRepository) {
      throw new TypeError(
        "AbstractRepository is an abstract class. It cannot be instantiated directly."
      );
    }

    this.table = table;
    this.database = database;
  }
}

module.exports = AbstractRepository;
