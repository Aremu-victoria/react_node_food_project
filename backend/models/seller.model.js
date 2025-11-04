const mongoose = require('mongoose');

const asSellerSchema = mongoose.Schema({
  title: { type: String, required: true },
  firstname: { type: String, required: true, unique: true },
  lastname: { type: String, required: true},
  phone_number: { type: String, required: true},
  address: { type: String, required: true},
  city: { type: String, required: true},
  state: { type: String, required: true},
  landmark: { type: String, required: true},
  storename: { type: String, required: true},
  description: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
});


let sellerModel = mongoose.model("SignupAsSeller", asSellerSchema)


module.exports = sellerModel