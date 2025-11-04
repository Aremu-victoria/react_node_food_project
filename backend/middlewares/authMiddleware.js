const jwt = require('jsonwebtoken');
require('dotenv').config();
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Support tokens that contain { id, role } as well as older tokens that may contain { email }
    req.userId = decoded.id || null;
    req.role = decoded.role || null;
    req.email = decoded.email || null;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;