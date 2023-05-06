import React from "react";

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

const Sidebar = ({navItems}) => {
  return (
    <div className="layout-sidebar">
      <div className="nav-heading">Navigation</div>
      <div className="navigation">
        {navItems.map((el, idx) => {
          return (
            <div className="nav-item-wrap" key={"nav-item" + idx}>
              <div className="nav-item">
                <img className="icon" src={el.icon} alt={el.title} />
                <div className="title">{el.title}</div>
              </div>
              {el.subNav && (
                <div className="sub-nav-items">
                  {el.subNav.map((el2, idx2) => {
                    return (
                      <div key={"sub-nav-items" + idx + "-" + idx2}>
                        <div className="nav-item">
                          <img
                            className="icon"
                            src={el2.icon}
                            alt={el2.title}
                          />
                          <div className="title">{el2.title}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="nav-heading mt-40">Recent Task</div>
      <div className="navigation">
        {recentTasks.map((el, idx) => {
          return (
            <div key={"recent-task" + idx} className="nav-item">
              <img className="icon" src={el.icon} alt={el.title} />
              <div className="title">{el.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
