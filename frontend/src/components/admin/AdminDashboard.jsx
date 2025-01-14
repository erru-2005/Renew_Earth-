import React from "react";
import AdminHeader from "./AdminHeader";
const AdminDashboard = () => {
    return (
      <div className="p-6 bg-green-50 ">
        <AdminHeader adminName="John Doe" />
        <main className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
          {/* Total Donations Card */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-green-600">Total Donations</h2>
            <p className="text-3xl font-bold text-green-800 mt-2">0</p>
          </div>
  
          {/* Total Users Card */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-green-600">Total Users</h2>
            <p className="text-3xl font-bold text-green-800 mt-2">0</p>
          </div>
  
          {/* Pending Requests Card */}
          <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-semibold text-green-600">Pending Requests</h2>
            <p className="text-3xl font-bold text-green-800 mt-2">0</p>
          </div>
        </main>
      </div>
    );
  };
  
  export default AdminDashboard;