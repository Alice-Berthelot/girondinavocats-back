const express = require('express');
const router = express.Router();

const { getAllTimeslots } = require("../controllers/timeslotController");

router.get("/", getAllTimeslots);

module.exports = router;

