const mongoose = require("mongoose");

const DbURL =
  "mongodb+srv://bhopalshubh:mahadev.29@cluster0.oleenli.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(DbURL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Database connection error : ${error}`);
  }
};

module.exports = connectDB;
