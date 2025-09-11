const foodModel = require("../models/food.model");
const storageService = require("../service/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  console.log(req.foodPartner);
  console.log(req.body);
  console.log(req.file);

  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id,
  });

  res
    .status(201)
    .json({ message: "food created successfully", food: foodItem });

  // console.log(fileUploadResult);
  // res.send("food item created");
}

async function getFoodItem(req, res) {
  const foodItem = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetch succesfully",
    foodItem 
  });
}

module.exports = { createFood, getFoodItem };
