import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center mx-1 my-1 p-8 rounded-xl shadow-xl">
      <div className="animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 capitalize">
          🌟 Welcome, {JSON.parse(localStorage.getItem('user')).firstname}! 🌟
        </h1>
        <p className="text-lg">
          🌱 Together, we’re planting seeds of hope and greenery.
        </p>
      </div>
    </header>
  );
};

export default Header;
