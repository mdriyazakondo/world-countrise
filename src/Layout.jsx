import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import FilterCountry from "./components/Country/FilterCountry";
import Navbar from "./Navbar";
import VisitedList from "./components/Countrise/VisitedList";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/country/:id" element={<FilterCountry />} />
        <Route path="/visited" element={<VisitedList />} />
      </Routes>
    </div>
  );
};

export default Layout;
