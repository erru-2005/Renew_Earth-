import React from 'react';
import Signin from './components/Auth/Signin';
import Login from './components/Auth/Login';
import AdminHeader from './components/admin/AdminHeader';
import AdminDashboard from './components/admin/AdminDashboard';
import DonersList from './components/admin/DonersList';
import Header from './components/Customer/Header';
import Carousel from './components/Customer/Carousels';
import DonationBlock from './components/Customer/DonationBlock';
import Footer from './components/Customer/Footer';
export default function App() {
   
  
  return (
    <div>
      {/* <Signin /> */}
      {/* <Login /> */}
      {/* <AdminHeader adminName="John Doe" /> */}
      {/* <AdminDashboard />
      <DonersList /> */}
      <Header donorName={"Ram"}/>
      <Carousel/>
      <DonationBlock/>
      <Footer/>
    </div>
  )
}