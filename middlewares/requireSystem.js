const jwt = require('jsonwebtoken');
const config = require('../config');

const requireAdmin = (req, res, next) => {
  if (req.user.role==='super'||req.user.role==='system'){
    next();
  } else{
    return res.status(401).json({
      message: "not an admin account"
    });
  }
};

module.exports = requireAdmin;
