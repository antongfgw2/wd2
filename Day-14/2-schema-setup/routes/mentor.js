const { Mentor } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Mentor route is working");
});

router.post("/add", async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.json(mentor);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
