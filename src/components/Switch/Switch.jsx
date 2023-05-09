import React from "react";

import "./Switch.scss";

const Switch = ({ label }) => {
  return (
    <div className="d-flex gap-10">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      {label}
    </div>
  );
};

export default Switch;
