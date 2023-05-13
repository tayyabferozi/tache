import React from "react";

import "./Switch.scss";

const Switch = ({ label }) => {
  return (
    <div className="switch-wrap d-flex align-items-center gap-10">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      {label}
    </div>
  );
};

export default Switch;
