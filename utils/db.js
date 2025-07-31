const mongoose = require("mongoose");

exports.DbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      bufferMaxEntries: 0,
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

exports.setupDatabaseIndexes = async () => {
  try {
    console.log("Setting up database indexes...");

    // فهارس للمنتجات
    await Product.collection.createIndex({ title: 1 });
    await Product.collection.createIndex({ category: 1 });
    await Product.collection.createIndex({ brand: 1 });
    await Product.collection.createIndex({ price: 1 });
    await Product.collection.createIndex({ createdAt: -1 });

    // فهرس مركب للبحث النصي
    await Product.collection.createIndex({
      title: "text",
      description: "text",
    });

    // فهرس مركب للتصفية المتقدمة
    await Product.collection.createIndex({
      category: 1,
      brand: 1,
      price: 1,
    });

    console.log("Database indexes created successfully");
  } catch (error) {
    console.log("Error creating indexes:", error);
  }
};
