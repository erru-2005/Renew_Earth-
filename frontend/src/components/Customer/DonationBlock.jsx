import React, { useState } from "react";

const DonationBlock = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [error, setError] = useState("");

  const handleDonate = () => {
    if (donationAmount < 40) {
      setError("Donation amount must be at least ₹40.");
      return;
    }
    
    setError("");

    // Process the donation (mock functionality)
    alert(
      `Thank you for your donation of ₹${donationAmount}! Your recommendation: "${recommendation}".`
    );

    // Reset the form
    setDonationAmount("");
    setRecommendation("");
  };

  return (
    <section className="relative bg-gradient-to-r from-green-200 via-white to-green-100 p-8 rounded-xl shadow-lg mx-4 my-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-700 animate-bounce mb-4">
          🌱 Make a Difference: Donate for a Greener Tomorrow! 🌳
        </h2>
        <p className="text-lg text-green-600 italic">
          Your contribution will plant trees and nurture the planet for
          generations to come.
        </p>
      </div>

      {/* Donation Form */}
      <div className="mt-8 flex flex-col space-y-6">
        <div>
          <label
            htmlFor="donationAmount"
            className="text-green-700 font-semibold block mb-2"
          >
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
          <label
            htmlFor="recommendation"
            className="text-green-700 font-semibold block mb-2"
          >
            Plant Recommendation:
          </label>
          <textarea
            id="recommendation"
            value={recommendation}
            onChange={(e) => setRecommendation(e.target.value)}
            placeholder="e.g., Neem, Tulsi, or 2 Neem + 3 Tulsi"
            className="w-full p-3 border border-green-400 rounded-lg shadow focus:ring-2 focus:ring-green-500 focus:outline-none text-green-700"
          ></textarea>
        </div>

        {error && (
          <div className="text-red-500 font-medium text-center">{error}</div>
        )}

        <button
          onClick={handleDonate}
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          🌿 Donate Now
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-10 bg-green-50 border border-green-300 p-6 rounded-lg shadow-inner">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          🌍 Here's How Your Donation Helps:
        </h3>
        <ul className="list-disc list-inside text-green-600 space-y-2">
          <li>
            Each donation goes toward planting and nurturing a tree in a
            carefully chosen location.
          </li>
          <li>
            After plantation, you will receive an email with a picture of your
            plant and its location.
          </li>
          <li>
            You can follow up on the growth of your plant by emailing our
            official team at{" "}
            <a
              href="mailto:support@renewearth.com"
              className="text-green-500 underline hover:text-green-700"
            >
              support@renewearth.com
            </a>
            .
          </li>
          <li>
            Together, we can build a greener earth—one plant at a time.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DonationBlock;
