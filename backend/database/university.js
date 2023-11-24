// scripts/seed.js
const mongoose = require('mongoose');
const University = require('../models/university');

// require('dotenv').config();
require('dotenv').config({ path: __dirname + '/../.env' }); // fix lỗi env not find URI


console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,        // Remove deprecated option
  useUnifiedTopology: true,    // Remove deprecated option
  useCreateIndex: true,        // Use this option to fix deprecation warning
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', async function () {
  console.log('Connected to MongoDB');
  // Add universities to the database
  const universities = [
    { _id: new mongoose.Types.ObjectId(), name: 'Ho Chi Minh City University of Technology and Education' },
    { _id: new mongoose.Types.ObjectId(), name: 'Ho Chi Minh University of Banking' },
    { _id: new mongoose.Types.ObjectId(), name: 'Van Hien University' },
    { _id: new mongoose.Types.ObjectId(), name: 'Van Lang University' },
  ];

  try {
    const savedUniversities = await University.create(universities);
    console.log('Universities added to the database:', savedUniversities);
  } catch (error) {
    console.error('Error adding universities:', error);
  } finally {
    mongoose.connection.close();
  }
// end add universities

});
