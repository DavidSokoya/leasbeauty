import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Added loading state
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ✅ Prevent page reload on form submit

    setError(""); // Reset error message
    setLoading(true); // ✅ Show loading state

    try {
      const res = await axios.post(
        "https://leasbeauty.onrender.com/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      const { user, token } = res.data;

      login(user, token); // ✅ Save user data to context

      // ✅ Redirect based on role
      navigate(user.role === "admin" ? "/admin" : "/");

    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password.");
      console.error("Login error:", error.response?.data || error.message);
    } finally {
      setLoading(false); // ✅ Hide loading state
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading} // ✅ Disable button when loading
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600">
          Don't have an account? 
          <button 
            onClick={() => navigate("/register")} 
            className="text-blue-600 hover:underline ml-1"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
