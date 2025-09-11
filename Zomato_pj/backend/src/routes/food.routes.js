const express = require("express");
const foodController = require("../controllers/food.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const multer = require("multer");
const upload = multer({
  storage: multer.memoryStorage(),
});

const router = express.Router();

// food api [protected]
router.post(
  "/",
  authMiddleware.authFoodPartnerMiddleware,
  upload.single("video"),
  foodController.createFood
);

router.get("/", authMiddleware.authUserMiddleware, foodController.getFoodItem);

module.exports = router;
