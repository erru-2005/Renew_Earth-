import React from "react";

const Header = ({ donorName }) => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center mx-4 my-6 p-8 rounded-xl shadow-xl">
      <div className="animate-fade-in">
        <h1 className="text-5xl font-bold mb-4">
          🌟 Welcome, {donorName}! 🌟
        </h1>
        <p className="text-lg">
          🌱 Together, we’re planting seeds of hope and greenery.
        </p>
      </div>
    </header>
  );
};

export default Header;
