const express = require('express');
const app = express();
const lawyerRoutes = require('./routes/lawyer')
const appointmentRoutes = require('./routes/appointment')

app.use(express.json()); 

app.use('/api/lawyers', lawyerRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/fields', fieldRoutes);
app.use('/api/timeslots', timeslotRoutes);

// CORS :
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

const lawyers = (module.exports = app);
