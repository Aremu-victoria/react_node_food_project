const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true},
  password: { type: String, required: true},
  address: { type: String, required: true},
});


let userModel = mongoose.model("UserSignup", userSchema)

module.exports = userModel