import React from "react";
import clsx from "clsx";

import "./Badge.scss";

const Badge = ({ className, green, children, ...rest }) => {
  return (
    <div className={clsx("badge", className, { green })} {...rest}>
      {children}
    </div>
  );
};

export default Badge;
