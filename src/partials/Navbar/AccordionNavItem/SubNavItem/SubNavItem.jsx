import React from "react";
import { NavLink } from "react-router-dom";

const SubNavItem = ({ link, icon, title }) => {
  return (
    <NavLink to={link} className="sub-nav-item">
      <div className="nav-item">
        <div className="left">
          <img className="icon" src={icon} alt={title} />
          <div className="title">{title}</div>
        </div>
        <div className="right"></div>
      </div>
    </NavLink>
  );
};

export default SubNavItem;
