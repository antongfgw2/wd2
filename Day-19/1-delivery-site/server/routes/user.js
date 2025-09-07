const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const verifyToken = require("../middlewares/verify");

const email = "antongfgw2@gmail.com";
const pwd = "dtwtxbvcjozazzci";

router.get("/", (req, res) => {
  res.send("User route is working");
});

router.post("/signup", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);
    let userType = 3;
    if (req.body.userType === "hotel") {
      userType = 2;
    }
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password,
      userType,
    });
    const token = jwt.sign({ id: user._id }, "secretkey");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email,
        pass: pwd,
      },
    });

    let info = await transporter.sendMail({
      from: "Tech Info <antongfgw2@gmail.com>",
      to: req.body.email,
      subject: `Welcome, ${req.body.name}, verify your email - Tech Info`,
      html: `
      <div>
      <strong>${req.body.name}</strong>, we welecome to our platform.
      <a href="http://localhost:5173/verify/${token}">Verify Email</a>
      <div>
        <p>Thanks and Regards</p>
        <p>Tech Info Team</p>
        </div>
    </div>
      `,
    });
    console.log(info);

    res.json({ msg: "Signed up successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.get("/verify/:token", (req, res) => {
  try {
    const token = req.params.token;
    jwt.verify(token, "secretkey", async (err, decoded) => {
      if (err) {
        return res.json({ msg: "Invalid url" });
      } else {
        await User.findByIdAndUpdate(decoded.id, { verified: true });
        return res.json({ msg: "Account verified" });
      }
    });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.verified) {
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          const token = jwt.sign(
            { id: user._id, userType: user.userType },
            "secretkey"
          );
          return res.json({ token, success: true, userType: user.userType });
        } else {
          return res.json({ msg: "Wrong Password", success: false });
        }
      } else {
        return res.json({ msg: "Please verify your account", success: false });
      }
    } else {
      return res.json({ msg: "No user found", success: false });
    }
  } catch (error) {}
});

router.get("/data", verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId).select("-password -verified");
    return res.json({ user });
  } catch (error) {
    return res.json({ msg: error.message });
  }
});

module.exports = router;
