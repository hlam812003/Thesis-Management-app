const mongoose = require('mongoose');
const User = require('../models/user');

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
  // Create admin users
   
  const adminUsers = [
    {   
        _id: new mongoose.Types.ObjectId(),
        email: 'admin@gmail.com',
        name: 'Cao',
        lastname: 'Pham',
        role: 'Admin',
        // Assign the university ObjectId based on an existing university document
        university: mongoose.Types.ObjectId('6560d2e4c63d95490cf4e481'),
    },
  ];
  
  try {
    const savedAdminUsers = await User.create(adminUsers);
    console.log('Admin users added:', savedAdminUsers);
  } catch (error) {
    console.error('Error adding admin users:', error);
  } finally {
    mongoose.connection.close();
  }
  
});
