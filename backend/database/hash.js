const bcrypt = require('bcrypt');

const plaintextPassword = 'admin';

bcrypt.hash(plaintextPassword, 10, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  console.log('Hashed password:', hash);
});