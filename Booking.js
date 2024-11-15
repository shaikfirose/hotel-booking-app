const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    roomType: String,
    bookingDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Booking", BookingSchema);
