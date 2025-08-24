const express = require("express");
const v1apiRouter = require("./routes/v1");
const v2apiRouter = require("./routes/v2");
const app = express();

app.use(express.json());

app.use("/api/v1", v1apiRouter);
app.use("/api/v2", v2apiRouter);

app.listen(8080, () => {
  console.log("Server is up and running");
});
