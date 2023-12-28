require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/db");
const userRoute = require("../backend/routes/User");
const authRoute = require("../backend/routes/Auth")

app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server on ${process.env.PORT}`);
});
