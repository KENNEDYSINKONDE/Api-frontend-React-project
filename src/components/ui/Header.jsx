import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          A SIMPLE PROJECT MANAGEMENT API SYSTEM
        </h1>

        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">Products</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/statuses" className="hover:underline">Statuses</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
