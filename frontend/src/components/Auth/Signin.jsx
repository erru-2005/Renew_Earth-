import React, { useState } from "react";

const Signin = () => {
  const [firstname, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for skeleton loader

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true); // Show loader when the request starts

    try {
      const userdata = { firstname, dob, email, password };
      
      const response = await fetch("https://plantdonation.onrender.com/Signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signin failed. Please try again.");
      }

      const data = await response.json();
      setSuccess(data.message || "Signin successful! Welcome aboard.");
      setName("");
      setDob("");
      setEmail("");
      setPassword("");
      
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      
    } finally {
      setLoading(false); // Hide loader when the request finishes
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-green-600 text-center mb-6">
          🌱 Plant Donation Sign In
        </h1>
        <form className="space-y-4" onSubmit={handleSignin}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={firstname}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
              disabled={loading} // Disable input while loading
            />
          </div>
          {/* DOB Field */}
          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
              disabled={loading} // Disable input while loading
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
              disabled={loading} // Disable input while loading
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              required
              disabled={loading} // Disable input while loading
            />
          </div>
          {/* Sign In Button */}
          <button
            type="submit"
            className={`w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading} // Disable button while loading
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Skeleton Loader */}
        {loading && (
          <div className="mt-4 text-center">
            <div className="w-24 h-4 bg-gray-300 animate-pulse mx-auto mb-2"></div>
            <div className="w-20 h-4 bg-gray-300 animate-pulse mx-auto"></div>
          </div>
        )}

        {success && (
          <p className="mt-4 text-sm text-center text-green-600 font-semibold">
            {success}
          </p>
        )}
        {error && (
          <p className="mt-4 text-sm text-center text-red-500 font-semibold">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Signin;
