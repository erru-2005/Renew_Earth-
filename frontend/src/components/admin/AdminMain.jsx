 import React from "react";
 import AdminHeader from "./AdminHeader";
 import AdminDashboard from "./AdminDashboard";
 import DonorDashboard from "./DonorDashboard";
 

function AdminMain() {
  

  return (
    <div>
      <AdminDashboard />
      <DonorDashboard />
    </div>
  );
}
export default AdminMain;