import React from "react";

import "./Breadcrumb.scss";

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((el, idx) => {
        return (
          <div
            className="breadcrumb-item"
            key={"breadcrumb-item-" + Math.random() + idx}
          >
            {el.text}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
