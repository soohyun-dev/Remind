import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
}

export default Router;
