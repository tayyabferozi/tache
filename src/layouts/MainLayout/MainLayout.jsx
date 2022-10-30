import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer/Footer";
import Navbar from "../../partials/Navbar";

import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div id="main-layout">
      <div className="layout-content">
        <Navbar />
        <div className="layout-body">
          <div className="dark-bg-wrap">
            <img
              className="dots dots-1"
              src="/assets/vectors/dots-1.svg"
              alt="dots"
              title="dots"
            />
            <img
              className="dots dots-2"
              src="/assets/vectors/dots-2.svg"
              alt="dots"
              title="dots"
            />
            <img
              className="dots dots-3"
              src="/assets/vectors/dots-3.svg"
              alt="dots"
              title="dots"
            />
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
