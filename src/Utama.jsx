import React from "react";
import { Routes, Route } from "react-router-dom";
import beranda from "./pages/home";
import gallery from "./pages/gallery";
import hariBesar from "./pages/hariBesar";

const Utama = () => {
  return (
    <Routes>
      <Route exact path="/" Component={beranda} />
      <Route path="/Gallery" Component={gallery} />
      <Route path="/HariBesar" Component={hariBesar} />
    </Routes>
  );
};

export default Utama;
