import React from "react";

const SubNavItem = ({ icon, title }) => {
  return (
    <div className="sub-nav-item">
      <div className="nav-item">
        <div className="left">
          <img className="icon" src={icon} alt={title} />
          <div className="title">{title}</div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default SubNavItem;
