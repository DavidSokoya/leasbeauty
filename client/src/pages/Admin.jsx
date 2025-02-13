import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ Loading state
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return; // ✅ Wait for user data to load

    if (user.role !== "admin") {
      navigate("/"); // ✅ Redirect unauthorized users
      return;
    }

    const fetchBookings = async () => {
      try {
        setLoading(true); // ✅ Start loading
        const res = await axios.get("http://localhost:5000/api/bookings", {
          withCredentials: true,
        });

        setBookings(res.data);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch bookings.");
        console.error("Error fetching bookings:", error.response?.data || error.message);
        
        if (error.response?.status === 401) {
          navigate("/login"); // ✅ Redirect unauthorized users
        }
      } finally {
        setLoading(false); // ✅ Stop loading
      }
    };

    fetchBookings();
  }, [user, navigate]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading bookings...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Service</th>
              <th className="border border-gray-300 px-4 py-2">Stylist</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length > 0 ? (
              bookings.map((b) => (
                <tr key={b._id} className="border border-gray-300 hover:bg-gray-100 transition">
                  <td className="border border-gray-300 px-4 py-2">{b.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{b.email}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(b.date).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{b.service}</td>
                  <td className="border border-gray-300 px-4 py-2">{b.stylist}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-gray-500 py-4">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
