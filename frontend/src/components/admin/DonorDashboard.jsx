import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState(null);

  // Fetch all donor details from the backend
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch("https://plantdonation.onrender.com/getPendingList");
        const result = await response.json();
        if (response.ok) {
          setDonors(result.data);
        } else {
          setError(result.msg || "Failed to fetch donor details.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      }
    };

    fetchDonors();
  }, []);

  // Handle updating donor status
  const updateStatus = async (id, newStatus) => {
    try {
      const response = await fetch(`https://plantdonation.onrender.com/updateStatus`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status: newStatus }),
      });
      const result = await response.json();

      if (response.ok) {
        setDonors((prev) =>
          prev.map((donor) =>
            donor._id === id ? { ...donor, status: newStatus } : donor
          )
        );
      } else {
        alert(result.msg || "Failed to update status.");
      }
    } catch (err) {
      alert("An error occurred while updating the status.");
    }
  };

  // Handle copying email to clipboard
  const copyToClipboard = (email) => {
    navigator.clipboard.writeText(email);
    alert(`Copied: ${email}`);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-green-100 via-white to-green-200 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        🌱 Donor Dashboard 🌳
      </h1>

      {error && (
        <div className="text-center text-red-500 font-semibold">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {donors.map((donor) => (
          <div
            key={donor._id}
            className="bg-white shadow-lg rounded-lg p-6 border border-green-300 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-green-700 capitalize">
              {donor.firstname}
            </h2>
            <p className="text-sm text-gray-500">
              <strong>Email:</strong>{" "}
              <span className="text-blue-600 underline">
                <a
                  href={`mailto:${donor.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {donor.email}
                </a>
              </span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              <button
                onClick={() => copyToClipboard(donor.email)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm shadow hover:bg-blue-600 transition duration-300"
              >
                Copy Email
              </button>
              <Link
                to={`mailto:${donor.email}`}
                className="bg-green-500 text-white px-3 py-1 rounded-md text-sm shadow hover:bg-green-600 transition duration-300"
              >
                Send Email
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Total Donation:</strong> ₹{donor.totalDonation}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Last Donated At:</strong>{" "}
              {new Date(donor.DonatedAt).toLocaleDateString()}{" "}
              {new Date(donor.DonatedAt).toLocaleTimeString()}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Last Donation Amount:</strong> ₹{donor.amount}
            </p>

            {/* Display Recommendation Only if Provided */}
            {donor.recommendation && (
              <p className="text-sm text-gray-500">
                <strong>Recommendation:</strong> {donor.recommendation}
              </p>
            )}

            <p className="text-sm text-gray-500">
              <strong>Status:</strong>{" "}
              <span
                className={`${
                  donor.status === "completed"
                    ? "text-green-600"
                    : "text-yellow-600"
                } font-bold`}
              >
                {donor.status}
              </span>
            </p>

            <div className="mt-4 flex justify-around">
              {donor.status !== "completed" && (
                <button
                  onClick={() => updateStatus(donor._id, "completed")}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-300"
                >
                  Mark as Completed
                </button>
              )}
              {donor.status === "completed" && (
                <button
                  onClick={() => updateStatus(donor._id, "pending")}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                >
                  Undo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorDashboard;
