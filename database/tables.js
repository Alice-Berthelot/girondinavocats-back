const AppointmentRepository = require("./models/AppointmentRepository");
const ClientRepository = require("./models/ClientRepository");
const FieldRepository = require("./models/FieldRepository");
const LawyerRepository = require("./models/LawyerRepository");
const TimeSlotRepository = require("./models/TimeSlotRepository");

const tables = {};

tables.field = new FieldRepository();
tables.client = new ClientRepository();
tables.lawyer = new LawyerRepository();
tables.appointment = new AppointmentRepository();
tables.time_slot = new TimeSlotRepository();

// Use a Proxy to customize error messages when trying to access a non-existing table
module.exports = new Proxy(tables, {
  get(tableObject, tableName) {
    // Check if the table exists in the tables object
    if (tableName in tableObject) return tableObject[tableName];

    // If the table does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${tableName} is not defined`
    );
  },
});
