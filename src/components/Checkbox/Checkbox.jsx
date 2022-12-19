import React from "react";

import "./Checkbox.scss";

const Checkbox = ({ img, label, ...rest }) => {
  return (
    <label className="checkbox-container">
      <input type="checkbox" {...rest} />
      {img && <img src={img} title={label} alt={label} />}
      {label}
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
