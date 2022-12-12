import React from "react";

import "./Checkbox.scss";

const Checkbox = ({ label, ...rest }) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" {...rest} />
      {label}
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
