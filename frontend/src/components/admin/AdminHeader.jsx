import React from 'react';
import {  useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const Navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    Navigate("/");
  };
  return (
    <header className="bg-gradient-to-r from-green-100 via-green-200 to-green-300 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between ">
  {/* Left Section */}
  <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-3 text-center sm:text-left">
    <span className="text-3xl sm:text-4xl text-green-700">🌱</span>
    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600 capitalize">
      Hello, Admin{" "}
      <span className="text-green-800 font-bold">
        {JSON.parse(localStorage.getItem("admin")).firstname}
      </span>
      ! 🌟
    </h1>
  </div>

  {/* Right Section */}
  <div className="flex items-center space-x-2">
    <button
      onClick={(e) => {
        handleLogout(e);
      }}
      className="bg-green-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg"
    >
      🚪 Logout
    </button>
  </div>
</header>

  );
};

export default AdminHeader;