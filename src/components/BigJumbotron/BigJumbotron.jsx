import React from "react";

import "./BigJumbotron.scss";

const BigJumbotron = ({ icon, title, subTitle }) => {
  return (
    <div className="big-jumbotron">
      <img
        className="dots dots-1"
        src="/assets/vectors/icons/jumbotron-dots.svg"
        alt="dots"
      />
      <img
        className="dots dots-2"
        src="/assets/vectors/icons/jumbotron-dots.svg"
        alt="dots"
      />
      <img src={icon} alt={title} title={title} />

      <div className="title">{title}</div>
      <p className="sub-title">{subTitle}</p>
    </div>
  );
};

export default BigJumbotron;
