const fs = require("node:fs");
const path = require("node:path");
const mysql = require("mysql2/promise");
require("dotenv").config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const schema = path.join(__dirname, "..", "database", "schema.sql");

const migrate = async () => {
  try {
    const sql = fs.readFileSync(schema, "utf8");

    const database = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      multipleStatements: true,
    });

    await database.query(`drop database if exists ${DB_NAME}`);

    await database.query(`create database ${DB_NAME}`);

    await database.query(`use ${DB_NAME}`);

    // Execute the SQL statements defined in schema.sql
    await database.query(sql);

    // Close the database connection
    database.end();

    console.info(`${DB_NAME} updated from '${path.normalize(schema)}'`);
  } catch (err) {
    console.error("Error updating the database:", err.message, err.stack);
  }
};

migrate();
