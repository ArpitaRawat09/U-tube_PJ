import React from "react";
import {BrowserRouter, Routes, Route, Router } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<h1>User Register</h1>} />
        <Route path="/user/login" element={<h1>User Login</h1>} />
        <Route
          path="/food-partner/register"
          element={<h1>Food Partner Register</h1>}
        />
        <Route path="/food-partner/login" element={<h1>Food Partner Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
