import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin"; 
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="staff" element={<Staff />} />
          <Route path="services" element={<Services />} />
          <Route path="bookings" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoute element={<Admin />} adminOnly />} />
      </Routes>
    </Router>
  </AuthProvider>
);


