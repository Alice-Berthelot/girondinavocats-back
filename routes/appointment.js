const express = require("express");

const router = express.Router();

const {
    getAllAppointments,
    updateAppointment,
    createAppointment,
    deleteAppointment,
} = require("../controllers/appointmentController");


router.get("/", getAllAppointments);
router.post("/", createAppointment);
router.put("/:id", updateAppointment);
router.delete("/:id", deleteAppointment);

module.exports = router;