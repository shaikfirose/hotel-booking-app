const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Create a booking
router.post("/", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all bookings
router.get("/", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.send(bookings);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
