import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

const services = [
   "Braiding", "Ghana Weaving", "Wig Installation & Revamping","Pedicure", "Party Rockers Makeover","Fresh Locks & Dread Relocking", "Hair Products", 
 "Accessories", 
 "Perfume & Body Sprays", 
];

const stylists = [
  'Lylian',
  'Mummy Lylian',
  'Oreoluwa'
];

const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [service, setService] = useState('');
  const [stylist, setStylist] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, date, service, stylist }),
    });

    if (response.ok) {
      alert(`Booking for ${name} on ${date.toLocaleDateString()} was successful. We will send an email to ${email} with available times.`);
      navigate('/');
    } else {
      alert('Booking failed. Please try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date:</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service:</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="" disabled>Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="stylist" className="block text-sm font-medium text-gray-700">Stylist:</label>
          <select
            id="stylist"
            value={stylist}
            onChange={(e) => setStylist(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option value="" disabled>Select a stylist (optional)</option>
            {stylists.map((stylist, index) => (
              <option key={index} value={stylist}>{stylist}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Booking;
