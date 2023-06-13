import React from "react";

import NavItem from "./NavItem/NavItem";
import "./Sidebar.scss";

const recentTasks = [
  {
    icon: "/assets/vectors/icons/task.svg",
    title: "Recent Task",
  },
  {
    icon: "/assets/vectors/icons/task.svg",
    title: "Recent Task",
  },
  {
    icon: "/assets/vectors/icons/task.svg",
    title: "Recent Task",
  },
  {
    icon: "/assets/vectors/icons/task.svg",
    title: "Recent Task",
  },
];

const Sidebar = ({ navItems }) => {
  return (
    <div className="layout-sidebar">
      <div className="layout-sidebar-main">
        <div className="nav-heading">Navigation</div>
        <div className="navigation">
          {navItems.map((el, idx) => {
            return <NavItem key={"nav-item" + idx} idx={idx} {...el} />;
          })}
        </div>
        <div className="nav-heading mt-40">Recent Task</div>
        <div className="navigation">
          {recentTasks.map((el, idx) => {
            return (
              <div key={"recent-task" + idx} className="nav-item">
                <div className="left">
                  <img className="icon" src={el.icon} alt={el.title} />
                  <div className="title">{el.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
