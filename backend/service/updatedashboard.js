const usermodel = require("../models/usermodel");

// Endpoint to get total users, sum of total donations, and pending records
const updatedashboard = async (req, res) => {
  try {
    // Aggregate to get the required data
    const result = await usermodel.aggregate([
      {
        $facet: {
          totalUsers: [
            {
              $match: { role: { $ne: "admin" } } // Exclude users with role 'admin'
            },
            {
              $count: "total" // Count the total number of non-admin records
            }
          ],
          totalDonations: [
            {
              $group: {
                _id: null,
                totalDonationSum: { $sum: "$totalDonation" } // Sum of all `totalDonation` fields
              }
            }
          ],
          pendingRecords: [
            {
              $match: { status: "pending" } // Filter records where status is 'pending'
            },
            {
              $count: "pendingCount" // Count the number of pending records
            }
          ]
        }
      }
    ]);

    // Extract data from the aggregation result
    const totalUsers = result[0].totalUsers.length > 0 ? result[0].totalUsers[0].total : 0;
    const totalDonationSum = result[0].totalDonations.length > 0 ? result[0].totalDonations[0].totalDonationSum : 0;
    const pendingCount = result[0].pendingRecords.length > 0 ? result[0].pendingRecords[0].pendingCount : 0;

    // Return the summary data
    res.status(200).json({
      totalUsers,
      totalDonationSum,
      pendingCount
    });
  } catch (error) {
    
    res.status(500).json({ msg: "An error occurred while fetching the summary data.", error: error.message });
  }
};

module.exports = updatedashboard;
