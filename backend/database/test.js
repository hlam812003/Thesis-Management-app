const mongoose = require('mongoose');
const Thesis = require('../models/thesis');
const fs = require('fs').promises;
const path = require('path');

require('dotenv').config({ path: __dirname + '/../.env' });

console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

db.once('open', async function () {
  console.log('Connected to MongoDB');
  
  // Add a new thesis to the database with an image buffer
  const imagePath = 'C:/Users/admin/Desktop/images thesis/Dominik Hose PhD thesis Possibilistic.png'; // Use double backslashes or forward slashes
  const imageBuffer = await readImageFile(imagePath);

  // Add a new thesis to the database
  const newThesisData = {
    title: 'Sample Thesis',
    description: 'This is a sample thesis description.',
    prerequisites: 'Prerequisite details go here.',
    tags: ['Tag1', 'Tag2'],
    created_time: new Date(),
    pending: true,
    assigned: false,
    university: '6560d2e4c63d95490cf4e481', // Use the _id of the desired university
    creator_student: '6568a9b9d8bf8a1068077d4e', // Use the _id of the creator student
    images: imageBuffer,
  };

  try {
    const thesis = await Thesis.create({
      _id: new mongoose.Types.ObjectId(),
      ...newThesisData,
    });
    console.log('Thesis added to the database:', thesis);
  } catch (error) {
    console.error('Error adding thesis:', error);
  } finally {
    mongoose.connection.close();
  }
});

async function readImageFile(filePath) {
  try {
    const buffer = await fs.readFile(path.resolve(filePath));
    return buffer;
  } catch (error) {
    console.error('Error reading image file:', error);
    throw error;
  }
}
