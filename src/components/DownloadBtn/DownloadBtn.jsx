import clsx from "clsx";

import Button from "../Button";

const DownloadBtn = ({ className, textClassName, name, date }) => {
  return (
    <Button
      className={clsx("gap-10 h-40 align-items-center py-2", className)}
      textClassName={clsx(
        textClassName,
        "date-time-container restrict-one-line"
      )}
      primary
      icon={{
        src: "/assets/vectors/icons/document-2.svg",
        title: "document",
        alt: "document",
      }}
    >
      <div className="restrict-one-line">{name}</div>
      <div className="date-time">
        <img
          className="ms-26 ms-575-10 timer-icon"
          src="/assets/vectors/icons/timer.svg"
          alt="timer"
          title="timer"
        />
        <span className="thin d-inline-block fs-15 fw-200 restrict-one-line">
          {date}
        </span>
        <div className="download">
          <img
            src="/assets/vectors/icons/import-3.svg"
            alt="import"
            title="import"
          />
        </div>
      </div>
    </Button>
  );
};

export default DownloadBtn;
