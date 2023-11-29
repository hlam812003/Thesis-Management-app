const mongoose = require('mongoose');
const External = require('../models/external');

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
    // Create admin external
  const adminExternal = [
    {   
        _id: new mongoose.Types.ObjectId(),
        email: 'admin@gmail.com',
        password: 'admin', // You should hash the password in a real application
        name: 'Cao',
        lastname: 'Pham',
        role: 'Admin',
        active: false,
    },
  ];
 
  try {
    const savedAdminExternal = await External.create(adminExternal);
    console.log('Admin external added:', savedAdminExternal);
  } catch (error) {
    console.error('Error adding admin external:', error);
  } finally {
    mongoose.connection.close();
  }

});