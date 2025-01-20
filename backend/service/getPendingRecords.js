const usermodel = require("../models/usermodel");

// Fetch all pending records
const getPendingRecords = async (req, res) => {
  try {
    const pendingRecords = await usermodel.find(
      { status: "pending", role: { $ne: "admin" } }, // Filter for pending and exclude admin
      { role: 0, password: 0 } // Exclude role and password fields
    );

    res.status(200).json({
      msg: "Pending records fetched successfully.",
      data: pendingRecords,
    });
  } catch (error) {
    
    res.status(500).json({
      msg: "An error occurred while fetching pending records.",
      error: error.message,
    });
  }
};



module.exports =  getPendingRecords;
