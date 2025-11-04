const mongoose = require('mongoose');

const riderSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  password: { type: String, required: true },
  experience: { type: String, required: true },
  past: { type: String, required: true },
  license: { type: String, required: true }, 
});

module.exports = mongoose.model("SignupAsRider", riderSchema)
