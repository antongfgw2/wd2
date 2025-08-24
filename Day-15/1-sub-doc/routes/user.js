const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("User route is working");
});

router.post("/add", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.put("/add-sport/:userId", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $push: { sports: req.body },
      },
      {
        new: true,
      }
    );
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.put("/remove-sport/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const sport = await user.sports.id(req.body.id);
    await sport.deleteOne();
    await user.save();
    res.json(user);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
