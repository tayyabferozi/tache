import React from "react";
import clsx from "clsx";

import "./InfoBox.scss";

const InfoBox = ({ text, count, active }) => {
  return (
    <div className={clsx("project-ticket-info-box", { active })}>
      <div className="box"></div>
      <div className="text">{text}</div>
      <div className="count">{count}</div>
    </div>
  );
};

export default InfoBox;
