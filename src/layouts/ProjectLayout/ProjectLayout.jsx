import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import Sidebar from "./Sidebar";
import "./ProjectLayout.scss";

const ProjectLayout = () => {
  return (
    <div id="project-layout">
      <Navbar />
      <div className="layout-content">
        <Sidebar />
        <div className="layout-body">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectLayout;
