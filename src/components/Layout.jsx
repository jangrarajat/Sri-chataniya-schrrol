import React from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Top Navigation */}
      <TopNav />

      {/* Main Navigation */}
      <MainNav />

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
      
    </div>
  );
};

export default Layout;