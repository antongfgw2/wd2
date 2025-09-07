const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    hotel: {
      type: mongoose.Types.ObjectId,
      ref: "hotels",
    },
    orderInfo: [
      new mongoose.Schema({
        name: String,
        price: Number,
        rating: Number,
      }),
    ],
    status: {
      type: Number, //1. waiting, 2. accepted, 3.refused
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("orders", OrderSchema);

module.exports = Orders;
