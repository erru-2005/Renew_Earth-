const usermodel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const validator = require("validator");

async function createUser(req, res) {
  try {
    const { firstname, dob, email, password,role } = req.body;
    
    // Check if all fields are provided
    if (!firstname || !dob || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Validate email format using validator
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    // Check if a user with the provided email already exists
    const existingUser = await usermodel.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "You're already registered! Please log in. 😊" });
    }

    // Validate password strength (e.g., minimum 8 characters, at least one number)
    if (password.length < 8 || !/\d/.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and contain at least one number.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const user = new usermodel({
      firstname,
      dob,
      email,
      password: hashedPassword,
      role,
    });
    await user.save();

    // Respond with success
    res.status(201).json({ message: "User created successfully. You can now log in." });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
}

module.exports = createUser;
