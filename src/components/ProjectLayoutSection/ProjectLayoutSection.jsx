import React from "react";
import clsx from "clsx";

import "./ProjectLayoutSection.scss";

const ProjectLayoutSection = ({
  className,
  bgWhite,
  bgGrey,
  withoutPadding,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        className,
        bgGrey && "bg-grey",
        bgWhite && "bg-white",
        withoutPadding && "without-padding",
        "layout-body-section-container"
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ProjectLayoutSection;
