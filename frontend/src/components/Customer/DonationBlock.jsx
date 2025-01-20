import React, { useState } from "react";

const DonationBlock = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleDonate = async () => {
    if (donationAmount < 40) {
      setError("Donation amount must be at least ₹40.");
      return;
    }

    const userId = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))._id
      : null;
    if (!userId) {
      setError("User ID not found. Please log in.");
      return;
    }

    setError(""); // Clear any existing errors
    setSuccess(""); // Clear any existing success messages

    const donationData = {
      amount: donationAmount,
      recommendation: recommendation,
      id: userId,
    };

    try {
      const response = await fetch("http://localhost:4000/updateDonation", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donationData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || "An error occurred. Please try again.");
      } else {
        setSuccess(data.msg || "Donation updated successfully! 🎉");
        setShowPopup(true); // Show success popup
        setTimeout(() => {
          setShowPopup(false); // Hide popup after 3 seconds
        }, 3000);
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      
    }

    setDonationAmount("");
    setRecommendation("");
  };

  return (
    <section className="relative bg-gradient-to-r from-green-200 via-white to-green-100 p-8 rounded-xl shadow-lg mx-1 my-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-700 animate-bounce mb-4">
          🌱 Make a Difference: Donate for a Greener Tomorrow! 🌳
        </h2>
        <p className="text-lg text-green-600 italic">
          Your contribution will plant trees and nurture the planet for generations to come.
        </p>
      </div>

      {/* Donation Form */}
      <div className="mt-8 flex flex-col space-y-6">
        <div>
          <label htmlFor="donationAmount" className="text-green-700 font-semibold block mb-2">
            Enter Donation Amount (₹):
          </label>
          <input
            type="number"
            id="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="e.g., 100"
            className="w-full p-3 border border-green-400 rounded-lg shadow focus:ring-2 focus:ring-green-500 focus:outline-none text-green-700"
          />
        </div>

        <div>
          <label htmlFor="recommendation" className="text-green-700 font-semibold block mb-2">
            Plant Recommendation:(Optional)
          </label>
          <textarea
            id="recommendation"
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            placeholder="e.g., Neem, Tulsi, or 2 Neem + 3 Tulsi"
            className="w-full p-3 border border-green-400 rounded-lg shadow focus:ring-2 focus:ring-green-500 focus:outline-none text-green-700"
          ></textarea>
        </div>

        {error && <div className="text-red-500 font-medium text-center">{error}</div>}
        {success && <div className="text-green-500 font-medium text-center">{success}</div>}

        <button
          onClick={handleDonate}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          🌿 Donate Now
        </button>
      </div>

      {/* Popup Success Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center animate-bounce">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-green-700">Donation Successful!</h3>
            <p className="text-green-500 mt-2">Thank you for making a difference! 🌍</p>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-10 bg-green-50 border border-green-300 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          🌍 Here's How Your Donation Helps:
        </h3>
        <ul className="list-disc list-inside text-green-600 space-y-2">
          <li>Each donation goes toward planting and nurturing a tree in a carefully chosen location.</li>
          <li>After plantation, you will receive an email with a picture of your plant and its location.</li>
          <li>
            You can follow up on the growth of your plant by emailing our official team at{" "}
            <a href="mailto:support@renewearth.com" className="text-green-500 underline hover:text-green-700">
              support@renewearth.com
            </a>
            .
          </li>
          <li>Together, we can build a greener earth—one plant at a time.</li>
        </ul>
      </div>
    </section>
  );
};

export default DonationBlock;
