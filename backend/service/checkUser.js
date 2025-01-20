// filepath: /E:/plantdonner/backend/service/checkUser.js
const userModel = require('../models/usermodel');
const bcrypt = require('bcrypt');

const checkUser = async (req, res) => {
  try {
    const { mail, password } = req.body;

    // Validate input
    if (!mail || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }

    // Find user by email
    const user = await userModel.findOne({ email: mail });
    if (!user) {
      return res.status(404).json({ msg: "Oops! We couldn't find you. Please sign in." });
    }

    // Compare the password with the hashed password stored in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid password' });
    }

    // Check the user's role (for example, only 'user' role can log in)
    if (user.role === 'user'||'admin') {
      // Respond with user data (excluding password)
      const { _id,firstname, dob, role } = user;
      return res.status(200).json({
        msg: 'Login successful',
        code: 200,
        user: { _id,firstname, dob,role },
      });
    } else {
      return res.status(403).json({ msg: 'Unauthorized role' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: 'Internal server error', error: err.message });
  }

};

module.exports = checkUser;
