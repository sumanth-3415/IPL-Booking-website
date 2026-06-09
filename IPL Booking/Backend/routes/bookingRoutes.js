const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {

    try {

        const booking = new Booking(req.body);

        await booking.save();

        res.send("Booking Saved");

    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.get("/:email", async (req, res) => {

    const bookings = await Booking.find({
        email: req.params.email
    });

    res.json(bookings);
});

module.exports = router;