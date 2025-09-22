import React from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "../pages/user/Login";
import UserRegister from "../pages/user/Register";
import FoodPartnerLogin from "../pages/food-partner/Login";
import FoodPartnerRegister from "../pages/food-partner/Register";
import Home from "../general/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
      <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
