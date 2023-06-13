import React from "react";
import clsx from "clsx";

import "./Badge.scss";

const Badge = ({ className, green, outlined, children, ...rest }) => {
  return (
    <div className={clsx("badge", className, { green, outlined })} {...rest}>
      {children}
    </div>
  );
};

export default Badge;
