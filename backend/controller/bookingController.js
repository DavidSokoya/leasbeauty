import { Booking } from '../model/BookingsSchema.js';

export const bookingController = {
  
  getBookings: async (req, res) => {
    try {
      const bookings = await Booking.find().sort({ date: 1 });
      res.json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Error fetching bookings' });
    }
  },

  createBooking: async (req, res) => {
    try {
      const { name, email, date, service, stylist } = req.body;
      const newBooking = new Booking({ name, email, date, service, stylist });
      await newBooking.save();
      res.json(newBooking);
    } catch (error) {
      console.error('Error saving booking:', error);
      res.status(500).json({ message: 'Error saving booking' });
    }
  }
}









