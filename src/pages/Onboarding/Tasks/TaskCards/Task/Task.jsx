import React from "react";
import Skeleton from "react-loading-skeleton";

import Badge from "../../../../../components/Badge";
import "./Task.scss";

const Task = ({ img, title, days, description, price, tag, skeleton }) => {
  return (
    <div className="project-onboarding-task-card">
      <div className="top">
        <div className="left d-flex flex-grow-1 align-items-center gap-2">
          {skeleton ? (
            <Skeleton circle width={34} height={34} />
          ) : (
            <img className="project-img" src={img} alt={title} />
          )}
          <div className="title">
            {skeleton ? <Skeleton width={100} /> : title}
          </div>
        </div>

        {skeleton ? (
          <Skeleton width={78} />
        ) : (
          <div className="right flex-shrink-0 d-flex alig-items-center gap-2">
            <img
              src="/assets/vectors/icons/calendar-3.svg"
              alt="calendar"
              title="calendar"
            />
            <div className="fs-14">{days} days</div>
          </div>
        )}
      </div>
      <p className="mt-10 fs-14">
        {skeleton ? <Skeleton count={3} /> : description}
      </p>

      <div className="d-flex justify-content-between align-items-center mt-4">
        {skeleton ? <Skeleton width={84} /> : <Badge>{tag}</Badge>}

        {skeleton ? (
          <Skeleton width={62} />
        ) : (
          <div className="fw-600 text-primary-1">${price}</div>
        )}
      </div>
    </div>
  );
};

export default Task;
