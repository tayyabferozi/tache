import React from "react";

import Button from "../Button";

const DownloadBtn = ({ name, date }) => {
  return (
    <Button
      className="gap-10 h-40 align-items-center py-2"
      primary
      icon={{
        src: "/assets/vectors/icons/document-2.svg",
        title: "document",
        alt: "document",
      }}
    >
      {name}
      <img
        className="ms-26 ms-575-10 me-2 timer-icon"
        src="/assets/vectors/icons/timer.svg"
        alt="timer"
        title="timer"
      />
      <span className="thin d-inline-block fs-15 fw-200">{date}</span>
      <div className="download">
        <img
          src="/assets/vectors/icons/import-3.svg"
          alt="import"
          title="import"
        />
      </div>
    </Button>
  );
};

export default DownloadBtn;
