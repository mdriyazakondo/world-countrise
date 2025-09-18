import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl mx-auto">
      <Link to={"/"} className="text-2xl font-bold">
        Logo
      </Link>
      <ul className="flex items-center gap-4">
        <li className="text-2xl font-semibold">
          <Link to="/">All Data</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link to="/visited">Visited List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
