const express = require('express');
const router = express.Router();

const { getAllFields } = require("../controllers/fieldController");

router.get("/", getAllFields);

module.exports = router;

