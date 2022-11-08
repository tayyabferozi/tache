import React from "react";

import "./SubTitle.scss";

import Badge from "../../../components/Badge";

const SubTitle = () => {
  return (
    <div className="project-tickets-sub-title d-flex align-items-center">
      <Badge>Ticket Board</Badge>
      <div className="access d-flex align-items-center gap-10">
        <img
          src="/assets/vectors/icons/public-2.svg"
          alt="public"
          title="public"
          className="icon"
        />
        Public
      </div>
    </div>
  );
};

export default SubTitle;
