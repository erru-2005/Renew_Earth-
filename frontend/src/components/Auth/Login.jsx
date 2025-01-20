import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const AuthData = JSON.parse(localStorage.getItem("user"));
  const AdminData = JSON.parse(localStorage.getItem("admin"));
  useEffect(() => {
    // If neither AuthData nor AdminData exists, redirect to login ("/")
    if (!AuthData && !AdminData) {
      Navigate("/");
    }
    // If AuthData exists and role is "user", navigate to user dashboard
    else if (AuthData && AuthData.role === "user") {
      Navigate("/user");
    }
    // If AdminData exists and role is "admin", navigate to admin dashboard
    else if (AdminData && AdminData.role === "admin") {
      Navigate("/administrator");
    }
  }, [AuthData, AdminData, Navigate]); // Ensure the effect runs on changes to AuthData or AdminData


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const checkInfo = { mail, password };
      const resp = await fetch("https://plantdonation.onrender.com/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(checkInfo),
      });

      const data = await resp.json();

      if (data.code === 200) {
        setSuccessMessage(data.msg || "Login successful!");

        // Check the user's role and store the data in localStorage if role is 'user'
        if (data.user && data.user.role === "user") {
          localStorage.setItem("user", JSON.stringify(data.user));
          
          Navigate("/user");
        } else if (data.user && data.user.role === "admin") {
          // Check the user's role and store the data in localStorage if role is 'admin'
          localStorage.setItem("admin", JSON.stringify(data.user));
          
          Navigate("/administrator");
        }

        // Optionally redirect after successful login
        // window.location.href = "/dashboard";  // Example redirect
      } else {
        setError(data.msg || "Invalid email or password.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          Plant Donation Login
        </h1>

        {/* Success or Error Message */}
        {successMessage && (
          <div className="text-green-600 text-center mb-4">
            <p>{successMessage}</p>
          </div>
        )}
        {error && (
          <div className="text-red-600 text-center mb-4">
            <p>{error}</p>
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={mail}
              placeholder="Enter your email"
              onChange={(e) => setMail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Or Divider */}
        <div className="my-4 text-center text-gray-500">or</div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <span className="text-green-600 hover:underline cursor-pointer">
            <Link to="/Signin">Signin</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
