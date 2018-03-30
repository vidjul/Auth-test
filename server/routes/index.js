const express = require('express');
const app = express();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');

app.use(authRoutes);
app.use(userRoutes);

module.exports = app;