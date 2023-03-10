import React from "react";
import clsx from "clsx";

import "./Checkbox.scss";

const Checkbox = ({ className, img, label, ...rest }) => {
  return (
    <label className={clsx("checkbox-container", className)}>
      <input type="checkbox" {...rest} />
      {img && <img src={img} title={label} alt={label} />}
      {label}
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
