import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import Sidebar from "./Sidebar";
import "./ProjectLayout.scss";

const sidebarNavItems = [
  {
    icon: "/assets/vectors/icons/house.svg",
    title: "Project",
  },
  {
    icon: "/assets/vectors/icons/info.svg",
    title: "About",
  },
  {
    icon: "/assets/vectors/icons/onboarding.svg",
    title: "Onboarding",
    active: true,
    subNav: [
      {
        icon: "/assets/vectors/icons/design.svg",
        title: "Design",
        active: true,
      },
      {
        icon: "/assets/vectors/icons/backend.svg",
        title: "Backend",
      },
      {
        icon: "/assets/vectors/icons/frontend.svg",
        title: "Frontend",
      },
    ],
  },
  {
    icon: "/assets/vectors/icons/team.svg",
    title: "Teams",
    subNav: [
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team A",
      },
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team B",
      },
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team C ",
      },
    ],
  },
];

const ProjectLayout = () => {
  return (
    <div id="project-layout">
      <Navbar moreNavItems={sidebarNavItems} />
      <div className="layout-content">
        <Sidebar navItems={sidebarNavItems} />
        <div className="layout-body">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectLayout;
