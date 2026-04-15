const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri =
  process.env.MONGO_URI ||
  "mongodb+srv://lingarisumanthkumarreddy_db_user:12345@cluster0.rppx9k5.mongodb.net/iplDB?retryWrites=true&w=majority";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB Atlas Connected");
    
    // Start server AFTER MongoDB connects
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);