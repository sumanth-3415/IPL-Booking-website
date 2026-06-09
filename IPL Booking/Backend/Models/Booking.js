const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    email: String,
    match: String,
    stadium: String,
    seats: Array,
    category: String,
    paymentMethod: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Booking", bookingSchema);