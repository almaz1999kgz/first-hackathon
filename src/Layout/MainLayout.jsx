import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import FoodPage from "../pages/FoodPage";
import FoodCreate from "../pages/FoodCreate";

import CartFood from "../pages/CartFood";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/create" element={<FoodCreate />} />
        <Route path="/litfod" element={<CartFood />} />
      </Routes>
    </div>
  );
};

export default MainLayout;
