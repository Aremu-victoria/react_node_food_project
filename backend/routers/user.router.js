const express = require('express');
const router = express.Router();
const { signupAsSeller,signupAsRider,signup,login,getUserInfo,resetPassword,requestPasswordReset } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/signup',signup);
router.post('/signupAsSeller',signupAsSeller);
router.post('/signupAsRider',signupAsRider);
router.post('/login',login);
router.get('/api/user', authMiddleware, getUserInfo);
router.post('/forgot-password', requestPasswordReset);
router.post('/reset-password', resetPassword);

module.exports = router