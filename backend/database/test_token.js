const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const adminUsers = [
    {
        _id: '65679005819efa1bc4fe466f',
        
    },
];

const user = adminUsers[0];
const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
console.log('Generated Token:', token);
