import React from "react";

import "./PlaceholderTile.scss";

const PlaceholderTile = ({ ...rest }) => {
  return (
    <div id="placeholder-tile" {...rest}>
      <img className="add" src="/assets/vectors/icons/add.svg" alt="add" />
    </div>
  );
};

export default PlaceholderTile;
