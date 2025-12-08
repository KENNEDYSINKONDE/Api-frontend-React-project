import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <Header className="fixed top-0 left-0 w-full z-50" />

      <main className="flex-1 container mx-auto p-6 pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
