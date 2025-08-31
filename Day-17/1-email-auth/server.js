const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRouter = require("./routes/user");

connectDB();

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(8080, () => {
  console.log("Server is up and running");
});
