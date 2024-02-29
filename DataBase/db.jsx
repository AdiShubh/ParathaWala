const mongoose = require("mongoose");

const DbURL = process.env.Mongo_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(DbURL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(`Database connection error : ${error}`);
  }
};

module.exports = connectDB;
