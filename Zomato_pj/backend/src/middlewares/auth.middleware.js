const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authFoodPartnerMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: login first" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodPartnerModel.findById(decoded.id);
    if (!foodPartner) {
      return res.status(401).json({ message: "Unauthorized: login first" });
    }
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: login first" });
  }
};

const authUserMiddleware = async (req, res, next) => {
  const  token  = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please Login First",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    req.user = user;

    next()
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
