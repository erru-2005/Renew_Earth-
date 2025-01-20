import React from "react";

const Header = () => {
  // Get user data from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { firstname, dob } = user;

  // Check if dob is available
  if (!dob) {
    return (
      <header className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">
          🌟 Welcome! 🌟
        </h1>
        <p className="text-lg md:text-xl">
          🌱 Together, we’re planting seeds of hope and greenery.
        </p>
      </header>
    );
  }

  // Get today's date
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // Months are 0-indexed
  const todayDate = today.getDate();

  // Parse DOB
  const [birthYear, birthMonth, birthDate] = dob.split("-").map(Number);

  // Check if today matches the user's birthday
  const isBirthday = todayMonth === birthMonth && todayDate === birthDate;

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center p-8 rounded-xl shadow-xl">
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">
          🌟 Welcome, {firstname}! 🌟
        </h1>
        {isBirthday ? (
          <p className="text-xl md:text-2xl font-semibold my-4">
            🎉 Happy Birthday, {firstname}! 🎂
            <br />
            🌱 Celebrate by planting a tree and spreading the gift of life. 🌳
          </p>
        ) : (
          <p className="text-lg md:text-xl">
            🌱 Together, we’re planting seeds of hope and greenery.
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
