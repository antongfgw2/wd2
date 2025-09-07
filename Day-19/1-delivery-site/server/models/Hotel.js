const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    menu: [
      new mongoose.Schema({
        name: String,
        price: Number,
        rating: Number,
        image: String,
      }),
    ],
    rating: Number,
  },
  { timestamps: true }
);

const Hotel = mongoose.model("hotels", HotelSchema);

module.exports = Hotel;
