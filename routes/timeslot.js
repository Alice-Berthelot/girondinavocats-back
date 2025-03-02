const express = require('express');
const router = express.Router();

const { readAllTimeslots } = require("../controllers/timeslotController");

router.get("/", readAllTimeslots);

module.exports = router;

