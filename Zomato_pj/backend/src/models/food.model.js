const mongoose = require("mongoose");

const foodSChema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "food-partner",
  },
});

const foodModel = mongoose.model("food", foodSChema);
module.exports = foodModel;
