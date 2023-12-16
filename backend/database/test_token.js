const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const adminUsers = [
    {
        _id: '657d020bc4460a4d34437d43',
        
    },
];

const user = adminUsers[0];
const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '1h' });
console.log('Generated Token:', token);


