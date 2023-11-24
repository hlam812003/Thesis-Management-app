const express = require("express");
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});

// add uninversity routes to call api
const universityRoutes = require('./routes/university');
app.use('/university',universityRoutes);

// add admin routes to call api
const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);

module.exports = app;