const userModel = require("../models/usermodel");

const updateDonation = async (req, res) => {
  const { amount, recommendation, id } = req.body;
  

  // Validation for required fields
  if (!amount) {
    return res.status(400).json({ msg: "Amount is required." });
  } else if (amount < 40) {
    return res.status(400).json({ msg: "Amount should be greater than 40." });
  } else if (!id) {
    return res.status(400).json({ msg: "ID is required." });
  }

  try {
    // Fetch the user record to get the current totalDonation
    const userRecord = await userModel.findById(id);
    if (!userRecord) {
      return res.status(404).json({ msg: "User not found." });
    }

    // Calculate the new totalDonation
    const newTotalDonation = parseFloat((userRecord.totalDonation || 0)) + parseFloat(amount);

    // Prepare the update data
    const updateData = {
      amount: amount,
      status: "pending", // Default status
      DonatedAt: new Date(), // Current timestamp
      totalDonation: newTotalDonation, // Updated total donation
    };

    // Add recommendation if provided
    if (recommendation) {
      updateData.recommendation = recommendation;
    }

    // Update the user record in the database
    const updatedRecord = await userModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true } // Return the updated document
    );

    if (!updatedRecord) {
      return res.status(404).json({ msg: "Failed to update the record." });
    }

    res.status(200).json({
      msg: "Donation updated successfully! 🎉",
      data: updatedRecord,
    });
  } catch (error) {
    
    res.status(500).json({
      msg: "An error occurred while updating the record.",
      error: error.message,
    });
  }
};

module.exports = updateDonation;
