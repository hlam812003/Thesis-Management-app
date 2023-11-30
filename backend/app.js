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

// add external routes to call api
const external_loginRoutes=require('./routes/external');
app.use('/external',external_loginRoutes);

// add thesis routes to call api
const thesisRoutes=require('./routes/thesis');
app.use('/thesis',thesisRoutes);

// add professor routes to call api
const professorRoutes=require('./routes/professor');
app.use('/professor',professorRoutes);

// add student routes to call api
const studentRoutes=require('./routes/student');
app.use('/student',studentRoutes);

module.exports = app;