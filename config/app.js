const express = require('express');
const app = express();
const path = require("path");
const lawyerRoutes = require('../routes/lawyer')
const appointmentRoutes = require('../routes/appointment')
const clientRoutes = require('../routes/client')
const fieldRoutes = require('../routes/field')
const timeslotRoutes = require('../routes/timeslot')

app.use(express.json()); 

// CORS
const cors = require("cors");

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
    ],
  })
);

// ROUTES
app.use('/api/lawyers', lawyerRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/fields', fieldRoutes);
app.use('/api/timeslots', timeslotRoutes);


// EXPRESS STATIC (read multimedia files)
app.use(express.static(path.join(__dirname, "../public/assets/images")));

module.exports = app;
