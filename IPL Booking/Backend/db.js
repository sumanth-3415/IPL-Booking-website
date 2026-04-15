const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI || "mongodb+srv://lingarisumanthkumarreddy_db_user:12345@cluster0.rppx9k5.mongodb.net/iplDB?retryWrites=true&w=majority";
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;