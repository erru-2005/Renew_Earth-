import React from 'react';
import Signin from './components/Auth/Signin';
import Login from './components/Auth/Login';
import AdminMain from './components/admin/AdminMain';
import UserMain from './components/Customer/UserMain';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
 
  
    return (
      
      <BrowserRouter>
      <Routes>
        
        <Route path="/user" element={<UserMain/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/administrator" element={<AdminMain />} />
      </Routes>
    </BrowserRouter>
    )
  
 
}