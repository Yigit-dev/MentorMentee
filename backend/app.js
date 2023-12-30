require("dotenv").config();

const express = require("express");
const app = express();
const cors = require('cors');
const db = require("./config/db");
const userRoute = require("../backend/routes/User");
const authRoute = require("../backend/routes/Auth")
const mentorRoute = require("../backend/routes/Mentor");
const menteeRoute = require("../backend/routes/Mentee");

app.use(cors());
app.use(express.json({limit: '30mb', extended: true}));
app.use(express.urlencoded({limit: '30mb', extended: true}));

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/mentor", mentorRoute);
app.use("/mentee", menteeRoute);

app.listen(process.env.PORT, () => {
  console.log('Server on ${process.env.PORT}');
});