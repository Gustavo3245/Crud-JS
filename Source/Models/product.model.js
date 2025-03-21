const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      require: [true, "Please enter product quantity"],
      default: 0,
    },

    price: {
      type: Number,
      require: [true, "Please enter product price"],
      default: 0,
    },

    image: {
      type: String,
      require: false,
    },
  },

  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
