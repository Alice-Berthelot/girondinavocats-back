const express = require('express');
const router = express.Router();

const { readAllFields } = require("../controllers/fieldController");

router.get("/", readAllFields);

module.exports = router;

