const router = require("express").Router();
const userRouter = require("./user");
const hotelRouter = require("./hotel");

router.use("/user", userRouter);
router.use("/hotel", hotelRouter);

module.exports = router;
