const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((suc) => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });
