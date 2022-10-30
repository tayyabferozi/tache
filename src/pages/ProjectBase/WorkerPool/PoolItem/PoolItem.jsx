import React from "react";
import clsx from "clsx";

import "./PoolItem.scss";

const PoolItem = ({ img, name, date, projectTitle, isActive }) => {
  return (
    <div className="pool-item">
      <div className="left">
        <div className="avatar">
          <img src={img} alt={name} />
        </div>
        <div className="text">
          <div className="name">{name}</div>
          <div className="date fs-10 mt-1">{date}</div>
        </div>
      </div>
      <div className="right">
        <div className="fs-12">{projectTitle}</div>
        <div className={clsx("fs-10 mt-1", isActive && "active")}>
          {isActive ? "Active" : "Unactive"}
        </div>
      </div>
    </div>
  );
};

export default PoolItem;
