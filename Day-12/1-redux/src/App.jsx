import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import AddCompany from "./pages/AddCompany/AddCompany";
import Companies from "./pages/Companies/Companies";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
