import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../partials/Footer";
import Navbar from "../../partials/Navbar";
import Sidebar from "./Sidebar";
import "./ProjectLayout.scss";

const sidebarNavItems = [
  {
    icon: "/assets/vectors/icons/house.svg",
    title: "Project",
    link: "/project",
  },
  {
    icon: "/assets/vectors/icons/info.svg",
    title: "About",
    link: "/about",
  },
  {
    icon: "/assets/vectors/icons/onboarding.svg",
    title: "Onboarding",
    link: "/onboarding",
    subNav: [
      {
        icon: "/assets/vectors/icons/design.svg",
        title: "Design",
        link: "/onboarding-design",
      },
      {
        icon: "/assets/vectors/icons/backend.svg",
        title: "Backend",
        link: "/onboarding-backend",
      },
      {
        icon: "/assets/vectors/icons/frontend.svg",
        title: "Frontend",
        link: "/onboarding-frontend",
      },
    ],
  },
  {
    icon: "/assets/vectors/icons/team.svg",
    title: "Teams",
    link: "/teams",
    subNav: [
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team A",
        link: "/onboarding-teamA",
      },
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team B",
        link: "/onboarding-teamB",
      },
      {
        icon: "/assets/vectors/icons/team.svg",
        title: "Team C ",
        link: "/onboarding-teamC",
      },
    ],
  },
];

const ProjectLayout = () => {
  useEffect(() => {
    const el = () => {
      const scrollTop = document.getElementsByTagName("html")[0].scrollTop;

      document.querySelector(".layout-sidebar").scrollTop = scrollTop;
    };

    window.addEventListener("scroll", el);

    return () => {
      window.removeEventListener("scroll", el);
    };
  }, []);

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
