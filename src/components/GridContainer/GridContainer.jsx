import React from "react";
import clsx from "clsx";

const GridContainer = ({
  rootClassName,
  rowClassName = "",
  noPx0,
  children,
}) => {
  return (
    <div className={clsx("container-fluid", rootClassName, !noPx0 && "px-0")}>
      <div
        className={clsx("row", rowClassName, {
          "g-4":
            !rowClassName.includes("gx-") ||
            !rowClassName.includes("gy-") ||
            !rowClassName.includes("g-"),
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default GridContainer;
