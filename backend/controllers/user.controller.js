const userModel = require("../models/user.model");
const riderModel = require("../models/rider.model");
const sellerModel = require("../models/seller.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv')
dotenv.config();
const crypto = require('crypto');
const nodemailer = require('nodemailer');

const myScrete = process.env.JWT_SECRET;

// SIGN UP AS BUYER
const signup = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, address } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists with this email",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      address,
    });
    const result = await user.save();
    res.status(201).json({
      status: 201,
      message: "User created successfully",
      user: {
        fullName: result.fullName,
        email: result.email,
        phoneNumber: result.phoneNumber,
        address: result.address,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);

    // Handle duplicate key error (unique email)
    if (error.code === 11000) {
      return res.status(409).json({
        message: "User already exists with this email",
      });
    }

    // Handle validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.errors,
      });
    }

    // Generic error
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
// SIGN UP AS RIDER

const signupAsRider = async (req, res) => {
  try {
    const {
      firstname,
      email,
      phoneNumber,
      address,
      state,
      city,
      password,
      experience,
      past,
      license,
    } = req.body;

    if (
      !firstname ||
      !email ||
      !phoneNumber ||
      !address ||
      !state ||
      !city ||
      !password ||
      !experience ||
      !past ||
      !license
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingRider = await riderModel.findOne({ email });
    if (existingRider) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newRider = new riderModel({
      firstname,
      email,
      phoneNumber,
      address,
      state,
      city,
      password: hashedPassword,
      experience,
      past,
      license,
    });
    const savedRider = await newRider.save();
    return res.status(201).json({
      success: true,
      message: "Rider registered successfully",
      rider: {
        firstname: savedRider.firstname,
        email: savedRider.email,
        phoneNumber: savedRider.phoneNumber,
        address: savedRider.address,
        state: savedRider.state,
        city: savedRider.city,
        experience: savedRider.experience,
      },
    });
  } catch (error) {
    console.error("Error in signupAsRider:", error);

    // Handle specific errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.message,
      });
    }

    // Generic error response
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// SIGN UP AS SELLER

const signupAsSeller = async (req, res) => { 
  try {
    const {
      title,
      firstname,
      lastname,
      phone_number,
      address,
      city,
      state,
      landmark,
      storename,
      description,
      email,
      password,
    } = req.body;
    if (!title || !firstname || !lastname || !phone_number || !address || 
        !city || !state || !landmark || !storename || !description || !email || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields are required" 
      });
    }
    const existingSeller = await sellerModel.findOne({ email });
    if (existingSeller) {
      return res.status(409).json({ 
        success: false,
        message: "Email already registered" 
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newSeller = new sellerModel({
      title,
      firstname,
      lastname,
      phone_number,
      address,
      city,
      state,
      landmark,
      storename,
      description,
      email,
      password: hashedPassword,
    });
    const savedSeller = await newSeller.save();
    return res.status(201).json({
      success: true,
      message: "Seller registered successfully",
      seller: {
        id: savedSeller._id,
        title: savedSeller.title,
        firstname: savedSeller.firstname,
        lastname: savedSeller.lastname,
        storename: savedSeller.storename,
        email: savedSeller.email,
        phone_number: savedSeller.phone_number,
        address: savedSeller.address,
        city: savedSeller.city,
        state: savedSeller.state
      }
    });

  } catch (error) {
    console.error("Error in signupAsSeller:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        error: error.message
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// This Login For the 3 Roles (Buyer, Rider, Seller).
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }
    // Check in all collections
    let user = await userModel.findOne({ email });
    let role = 'buyer';

    if (!user) {
      user = await sellerModel.findOne({ email });
      role = 'seller';
    }

    if (!user) {
      user = await riderModel.findOne({ email });
      role = 'rider';
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    // Create JWT token
    const token = jwt.sign(
      {  email: user.email },
      myScrete,
      { expiresIn: '1d' }
    );

    // Return user data without password
    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      role,
      user: userData
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// THE DASHBOARDS FOR THE 3 ROLES (BUYER, RIDER, SELLER) 


const getUserInfo = async (req, res) => {
  try {
    const { role, userId } = req; 

    let user;
    switch(role) {
      case 'seller':
        user = await sellerModel.findById(userId).select('-password');
        break;
      case 'rider':
        user = await riderModel.findById(userId).select('-password');
        break;
      default: // buyer
        user = await userModel.findById(userId).select('-password');
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      user,
      role
    });

  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// FOR PASSWORD UPDATE REQUESTING EMAIL VERIFICATION
const getUserModel = (role) => {
  switch(role) {
    case 'seller': return sellerModel;
    case 'rider': return riderModel;
    default: return userModel;
  }
};
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const requestPasswordReset = async (req, res) => {
  try {
    const { email, role } = req.body;

    const Model = getUserModel(role);
    const user = await Model.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: `${role} not found with this email` });
    }
    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000;
    await user.save();
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${role}/${resetToken}`;

    const mailOptions = {
      to: user.email,
      subject: `[${role.toUpperCase()}] Password Reset Request`,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
          <h2 style="color: #333333;">Password Reset Request</h2>
          <p style="color: #555555; font-size: 16px; line-height:1.45">
            Click the button below to reset your password.
          </p>
          <a href="${resetUrl}"
             style="display: inline-block; padding: 12px 24px; margin-top: 20px; background-color: #000; color: white; text-decoration: none; border-radius: 4px; font-size: 16px;">
             Reset Password
          </a>
          <p style="color: #999999; font-size: 14px; margin-top: 30px;">
            If you did not request this, you can safely ignore this email.
          </p>
        </div>
      </div>`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reset email sent' });

  } catch (error) {
    res.status(500).json({ message: `Error processing password reset`, error: error.message });
  }
};


const resetPassword = async (req, res) => {
  try {
    const { token, newPassword, role } = req.body;
    
    // 1. Get the correct model
    const Model = getUserModel(role);
    const user = await Model.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid/expired token for ' + role });
    }

    // 2. Update password (same as before)
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).json({ message: `${role} password updated` });
  } catch (error) {
    res.status(500).json({ message: `Error resetting ${role} password` });
  }
};
module.exports = { signupAsSeller,signup,signupAsRider,login,getUserInfo,resetPassword,requestPasswordReset };