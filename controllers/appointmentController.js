const tables = require("../database/tables");

const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await tables.appointment.readAll();
    res.json(appointments);
  } catch (err) {
    next(err);
  }
};

const updateAppointment = async (req, res, next) => {
  const appointment = { ...req.body, id: req.params.id };
  try {
    await tables.appointment.update(appointment);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const createAppointment = async (req, res, next) => {
  const appointment = req.body;
  try {
    const insertId = await tables.appointment.create(appointment);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    await tables.appointment.delete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllAppointments,
  updateAppointment,
  createAppointment,
  deleteAppointment,
};
