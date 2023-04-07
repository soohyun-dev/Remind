import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@src/pages/Home";
import Login from "@src/pages/Home/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
