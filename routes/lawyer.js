const express = require('express');
const router = express.Router();

const { readAllLawyers } = require("../controllers/lawyerController");

router.get("/", readAllLawyers);

module.exports = router;

