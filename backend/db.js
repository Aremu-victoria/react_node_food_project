const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI || "mongodb+srv://movicdev:movic12@cluster0.iprbg.mongodb.net/food_delivery?retryWrites=true&w=majority&appName=Cluster0");
    console.log(" MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;