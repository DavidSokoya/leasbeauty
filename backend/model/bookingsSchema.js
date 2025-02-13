import mongoose from 'mongoose';

const BookingsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  service: { type: String, required: true },
  stylist: { type: String, required: false },
});

export const Booking = mongoose.model('Booking', BookingsSchema);