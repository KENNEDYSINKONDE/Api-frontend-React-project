// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 shadow-md">
      <ul className="space-y-2">
        <li><Link to="/admin/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
        <li><Link to="/admin/products" className="hover:text-blue-600">Products</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
