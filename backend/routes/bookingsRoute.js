import express from 'express';
import { bookingController } from '../controller/bookingController.js';
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/bookings', bookingController.createBooking);

router.get('/bookings', verifyToken, isAdmin, bookingController.getBookings); 

export default router;