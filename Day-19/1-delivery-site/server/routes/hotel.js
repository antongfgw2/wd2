const router = require("express").Router();
const allowedUsers = require("../middlewares/permissions");
const verifyToken = require("../middlewares/verify");
const Hotel = require("../models/Hotel");

router.post("/create", verifyToken, allowedUsers([2]), async (req, res) => {
  try {
    const hotelData = await Hotel.create({
      name: req.body.name,
      user: req.userId,
      address: req.body.address,
    });
    res.json({ msg: "Hotel created" });
  } catch (error) {
    res.json({ error });
  }
});

router.put("/add-dish", verifyToken, allowedUsers([2]), async (req, res) => {
  try {
    const hotelData = await Hotel.findOneAndUpdate(
      {
        user: req.userId,
      },
      {
        $addToSet: { menu: req.body.dish },
      },
      {
        new: true,
      }
    );
    res.json({ msg: "Hotel updated", hotelData });
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
