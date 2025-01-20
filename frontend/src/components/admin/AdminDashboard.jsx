import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  const [data, setData] = useState({
    totalDonations: 0,
    totalUsers: 0,
    pendingCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://plantdonation.onrender.com/updateadmin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from the server.");
        }

        const result = await response.json();
        console.log("API Response:", result);

        setData({
          totalDonations: result.totalDonationSum || 0,
          totalUsers: result.totalUsers || 0,
          pendingCount: result.pendingCount || 0,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-green-50">
      <AdminHeader />
      <main className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-3">
        {/* Total Donations Card */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-green-600">
            Total Donations (INR)
          </h2>
          <p className="text-3xl font-bold text-green-800 mt-2">
            ₹{data.totalDonations}
          </p>
        </div>

        {/* Total Users Card */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-green-600">Total Donors</h2>
          <p className="text-3xl font-bold text-green-800 mt-2">
            {data.totalUsers}
          </p>
        </div>

        {/* Pending Requests Card */}
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-lg font-semibold text-green-600">
            Pending Requests
          </h2>
          <p className="text-3xl font-bold text-green-800 mt-2">
            {data.pendingCount}
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
