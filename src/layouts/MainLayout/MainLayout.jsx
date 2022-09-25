import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer/Footer";
import Navbar from "../../partials/Navbar";

const MainLayout = () => {
  return (
    <div id="main-layout">
      <div className="layout-content">
        <Navbar />
        <div className="layout-body">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
