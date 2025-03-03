const { faker } = require("@faker-js/faker");

const database = require("../../config/db");

const refs = {};

class AbstractSeeder {
  constructor({ table, truncate = true, dependencies = [] }) {
    if (this.constructor === AbstractSeeder) {
      throw new TypeError(
        "AbstractSeeder is an abstract class. It cannot be instantiated directly."
      );
    }

    this.table = table;
    this.truncate = truncate;
    this.dependencies = dependencies;
    this.promises = [];
    this.faker = faker;
    this.refs = refs;
  }

  async #doInsert(data) {
    const { refName, ...values } = data;

    // Prepare the SQL statement: "insert into <table>(<fields>) values (<placeholders>)"
    const fields = Object.keys(values).join(",");
    const placeholders = new Array(Object.keys(values).length)
      .fill("?")
      .join(",");

    const sql = `insert into ${this.table}(${fields}) values (${placeholders})`;

    // Perform the query and if applicable store the insert id given the ref name
    const [result] = await database.query(sql, Object.values(values));

    if (refName != null) {
      const { insertId } = result;

      refs[refName] = { ...values, insertId };
    }
  }

  insert(data) {
    this.promises.push(this.#doInsert(data));
  }

  run() {
    throw new Error("You must implement this function");
  }

  getRef(name) {
    return refs[name];
  }
}

module.exports = AbstractSeeder;
