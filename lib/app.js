const express = require('express');
const profileRoutes = require('./routes/profile');
const app = express();

app.use(express.json());

app.use('/profile', profileRoutes);

module.exports = app;
