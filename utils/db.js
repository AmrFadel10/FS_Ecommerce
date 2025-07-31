const mongoose = require("mongoose");

exports.DbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
    });
    console.log("The database connected");
  } catch (error) {
    console.log("Database Error", error);
  }
};
