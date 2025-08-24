const router = require("express").Router();
const albums = require("../../data/albums");

const temp = [];

router.get("/", (req, res) => {
  res.send("Albums");
});

router.get("/all", (req, res) => {
  res.send(albums);
});

// router.get("/:id", (req, res) => {
//   const data = albums.find((item) => item.id == req.params.id);
//   res.json(data);
// });

// router.get("/user/:id", (req, res) => {
//   const data = albums.filter((item) => item.userId == req.params.id);
//   res.json(data);
// });

router.post("/add", (req, res) => {
  temp.push(req.body);
  res.json("Data added");
});

router.get("/students", (req, res) => {
  console.log(temp, "hitting");
  res.send(temp);
});

module.exports = router;
