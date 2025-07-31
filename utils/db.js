const mongoose = require("mongoose");

exports.DbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log("The database connected");
  } catch (error) {
    console.log("Database Error", error);
  }
};
