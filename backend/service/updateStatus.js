const usermodel = require("../models/usermodel"); // Import the user model


// Update the status of a record
const updateStatus = async (req, res) => {
  const { id, status } = req.body;

  // Validate the input
  if (!id || !status) {
    return res.status(400).json({
      msg: "Both 'id' and 'status' are required to update a record.",
    });
  }

  try {
    // Find and update the record
    const updatedRecord = await usermodel.findByIdAndUpdate(
      id,
      { status: status },
      { new: true } // Return the updated document
    );

    if (!updatedRecord) {
      return res.status(404).json({
        msg: "Record not found.",
      });
    }

    res.status(200).json({
      msg: "Record status updated successfully.",
      data: updatedRecord,
    });
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      msg: "An error occurred while updating the record.",
      error: error.message,
    });
  }
};

module.exports = updateStatus;