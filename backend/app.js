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


const universityRouter = require('./routes/university');
app.use('/', universityRouter);



module.exports = app;