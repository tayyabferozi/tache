import React from "react";
import clsx from "clsx";

import "./Badge.scss";

const Badge = ({ className, green, children }) => {
  return <div className={clsx("badge", className, { green })}>{children}</div>;
};

export default Badge;
