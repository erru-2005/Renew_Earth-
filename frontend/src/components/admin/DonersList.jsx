import React, { useState } from 'react';

const DonersList = () => {
  const [donors, setDonors] = useState([
    { id: 1, name: 'John Doe', amount: 500, status: 'Pending', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', amount: 300, status: 'Pending', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', amount: 150, status: 'Pending', email: 'alice.johnson@example.com' },
    { id: 4, name: 'Bob Brown', amount: 200, status: 'Pending', email: 'bob.brown@example.com' },
    { id: 5, name: 'Emily Davis', amount: 400, status: 'Pending', email: 'emily.davis@example.com' },
  ]);

  const markCompleted = (id) => {
    setDonors((prevDonors) =>
      prevDonors.map((donor) =>
        donor.id === id ? { ...donor, status: 'Completed' } : donor
      )
    );
  };

  return (
    <div className="bg-green-200 p-4 rounded-lg shadow-md mx-5">
      <h1 className="text-2xl font-bold text-center mb-6">Plant Donation Donor Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 border">Donor Name</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{donor.name}</td>
                <td className="px-4 py-2 border">{donor.amount}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={`mailto:${donor.email}`}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {donor.email}
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <span
                    className={`inline-block px-2 py-1 rounded-full ${
                      donor.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
                    }`}
                  >
                    {donor.status}
                  </span>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => markCompleted(donor.id)}
                  >
                    Mark Completed
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonersList;
