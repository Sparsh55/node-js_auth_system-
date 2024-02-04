const mongoose = require("mongoose");
require("dotenv").config();

const url =
  "mongodb+srv://sparshsaxena9654:sparsh@cluster0.8ftmp2y.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("database conected successfully");
  })
  .catch((error) => {
    console.log("not connected database");
  });
