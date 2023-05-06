import React from "react";
import clsx from "clsx";
import $ from "jquery";

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
  const navItemClickHandler = (e) => {
    const $this = $(e.currentTarget);
    const subNavItems = $this.find(".sub-nav-items");
    if (subNavItems.length > 0) {
      subNavItems.slideToggle();
      $this.find(".right img").toggleClass("mirrored");
    }
  };

  return (
    <div className="layout-sidebar">
      <div className="nav-heading">Navigation</div>
      <div className="navigation">
        {navItems.map((el, idx) => {
          return (
            <div
              className="nav-item-wrap"
              key={"nav-item" + idx}
              onClick={navItemClickHandler}
            >
              <div className={clsx("nav-item", el.active && "active")}>
                <div className="left">
                  <img className="icon" src={el.icon} alt={el.title} />
                  <div className="title">{el.title}</div>
                </div>
                <div className="right">
                  <img
                    src="/assets/vectors/icons/arrow-top.svg"
                    className="mirroed transitioned"
                    alt="arrow"
                  />
                </div>
              </div>
              {el.subNav && (
                <div className="sub-nav-items" style={{ display: "none" }}>
                  {el.subNav.map((el2, idx2) => {
                    return (
                      <div
                        className="sub-nav-item"
                        key={"sub-nav-items" + idx + "-" + idx2}
                      >
                        <div className="nav-item">
                          <div className="left">
                            <img
                              className="icon"
                              src={el2.icon}
                              alt={el2.title}
                            />
                            <div className="title">{el2.title}</div>
                          </div>
                          <div className="right">
                            {/* <img
                              src="/assets/vectors/icons/arrow-top.svg"
                              alt="arrow"
                            /> */}
                          </div>
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
              <div className="left">
                <img className="icon" src={el.icon} alt={el.title} />
                <div className="title">{el.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
