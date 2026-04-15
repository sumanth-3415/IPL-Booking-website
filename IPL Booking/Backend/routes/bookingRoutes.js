const express = require("express");
const router = express.Router();
const Booking = require("../Models/Booking");

// Save booking
router.post("/", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Get bookings by user
router.get("/:email", async (req, res) => {
    const data = await Booking.find({ email: req.params.email });
    res.json(data);
});

module.exports = router;