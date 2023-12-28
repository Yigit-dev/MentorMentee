require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/db");
const userRoute = require("../backend/routes/User");

app.use(express.json());
app.use("/user", userRoute);
app.listen(process.env.PORT, () => {
  console.log(`Server on ${process.env.PORT}`);
});
