import React from "react";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // Months are 0-indexed
  const todayDate = today.getDate();
  const [birthYear, birthMonth, birthDate] = user.dob.split("-").map(Number);

  const isBirthday = number(todayMonth) === number(birthMonth) && number(todayDate) === number(birthDate);

  return (
    <header className="bg-gradient-to-r from-green-600 to-green-400 text-white text-center p-8 rounded-xl shadow-xl">
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize">
          🌟 Welcome, {user.firstname}! 🌟
        </h1>
        {isBirthday ? (
          <p className="text-xl md:text-2xl font-semibold my-4">
            🎉 Happy Birthday, {user.firstname}! 🎂
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
