import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminRoute from "./components/AdminRoute";
import CustomerRoute from "./components/CustomerRoute";
import HotelRoute from "./components/HotelRoute";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import HotelDashboard from "./Pages/HotelDashboard/HotelDashboard";
import Hotels from "./Pages/Hotels/Hotels";
import Home from "./Pages/Home/Home";
import Verify from "./Pages/Verify/Verify";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
        <Route element={<HotelRoute />}>
          <Route path="/hotel-dashboard" element={<HotelDashboard />} />
        </Route>
        <Route element={<CustomerRoute />}>
          <Route path="/hotels" element={<Hotels />} />
        </Route>
        <Route path="/verify/:token" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
