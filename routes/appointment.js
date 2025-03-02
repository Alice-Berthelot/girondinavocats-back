const express = require("express");

const router = express.Router();

const {
    readAllAppointments,
    updateAppointment,
    createAppointment,
    deleteAppointment,
} = require("../controllers/appointmentController");


router.get("/", readAllAppointments);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;