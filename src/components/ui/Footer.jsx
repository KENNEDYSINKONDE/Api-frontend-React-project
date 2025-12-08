// src/components/ui/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-4">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
