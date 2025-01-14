import React from 'react';

const AdminHeader = ({ adminName }) => {
  return (
    <header className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">🌱</span>
        <h1 className="text-lg font-semibold text-green-600 font-sans text-center md:text-left">
          Hello, Admin <span className="text-green-800">{adminName}</span>! 🌟
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-end space-x-2">
        
        <button
          className="bg-green-600 text-white font-medium py-1 px-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 w-full md:w-auto"
        >
          🚪 Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;