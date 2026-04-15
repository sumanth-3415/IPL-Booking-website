const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    email: String,
    match: String,
    stadium: String,
    matchDate: String,
    seats: [Number],
    category: String,
    paymentMethod: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);