const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    minlength: [3, "First name should be not less then 3 charater"],
  },
  dob: {
    type: Date,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "email should be not less then 5 charater"],
  },
  password: {
    type: String,
    required: true,
    // select:false
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  status: {
    type: String,
    default: "logged",
    enum: ["logged", "pending", "completed"],
  },

  amount: {
    type: Number,
    default: 0,
  },
  totalDonation: {
    type: Number,
    default: 0,
  },
  recommendation: {
    type: String,
    default: null,
  },
  DonatedAt: {
    type: Date,
    default: Date.now(),
  },
});

// userschema.methods.generateAuthToken = function () {
//     const token = jwt.sign({_id: this._id}, process.env.JWT_Secret)
//     return token;
// }

// userschema.methods.comparePassword = async function (password) {
//     return await bcrypt.compare(password, this.password);

// }

// userschema.static.hashPassword = async function (password) {
//     return await bcrypt.hash(password, 10);
// }

const usermodel = mongoose.model("userdata", userschema);

module.exports = usermodel;
