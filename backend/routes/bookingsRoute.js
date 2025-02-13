import express from 'express';
import { createBooking, getBookings } from '../controller/bookingController.js';
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/bookings', createBooking);

router.get('/bookings', verifyToken, isAdmin, getBookings); 

export default router;