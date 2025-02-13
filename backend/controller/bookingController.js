import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Booking } from '../model/BookingsSchema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
  
 const  getBookings =  async (req, res) => {
    try {
      const bookings = await Booking.find().sort({ date: 1 });
      res.json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Error fetching bookings' });
    }
  }

 const  createBooking=  async (req, res) => {
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


export {getBookings, createBooking}







