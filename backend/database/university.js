// scripts/seed.js
const mongoose = require('mongoose');
const University = require('../models/university');

require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true,        // Remove deprecated option
  useUnifiedTopology: true,    // Remove deprecated option
  useCreateIndex: true,        // Use this option to fix deprecation warning
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', async function () {
  console.log('Connected to MongoDB');

  const universities = [
    { _id: mongoose.Types.ObjectId('000000000001'), name: 'Ho Chi Minh City University of Technology and Education' },
    { _id: mongoose.Types.ObjectId('000000000002'), name: 'Saigon Technology University' },
    { _id: mongoose.Types.ObjectId('000000000003'), name: 'Sports and Physical Gymnastics University II' },
    { _id: mongoose.Types.ObjectId('000000000004'), name: 'Ton Duc Thang University' },
    { _id: mongoose.Types.ObjectId('000000000005'), name: 'University of Economics, Ho Chi Minh City' },
    { _id: mongoose.Types.ObjectId('000000000006'), name: 'University of Natural Sciences' },
    { _id: mongoose.Types.ObjectId('000000000007'), name: 'Van Hien University' },
    { _id: mongoose.Types.ObjectId('000000000008'), name: 'Van Lang University' },
  ];

  try {
    const savedUniversities = await University.create(universities);
    console.log('Universities added to the database:', savedUniversities);
  } catch (error) {
    console.error('Error adding universities:', error);
  } finally {
    mongoose.connection.close();
  }
});
