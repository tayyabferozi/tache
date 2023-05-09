import React from "react";
import clsx from "clsx";

import "./Activity.scss";
import ActivityItem from "./ActivityItem";

const greenTextMaxSize = 28;

const Activity = ({ activity, showActivity, toggleActivityBar }) => {
  return (
    <div
      className={clsx("activity-wrap", !showActivity && "inactive", {
        "d-flex flex-column": !activity?.length,
      })}
    >
      <div className={clsx("activity-row")}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-10">
            <img
              src="/assets/vectors/icons/notification.svg"
              alt="activity"
              title="activity"
            />

            <div className="text-light-1 fw-500 fs-18">Activity</div>
          </div>
          <div>
            <svg
              className="circle-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgba(0,0,0,0)"
              onClick={toggleActivityBar}
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#8492A7"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="arrow"
                d="M10.74 15.53L14.26 12L10.74 8.47"
                stroke="#8492A7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {activity.length ? (
        activity.map((el, idx) => {
          let description;

          if (el.type === "taskCompletion") {
            description = (
              <>
                Completed{" "}
                <span className="text-primary-1 fw-600">
                  {el?.taskName?.slice(0, greenTextMaxSize)}
                  {el?.taskName?.length > greenTextMaxSize ? "..." : ""}
                </span>{" "}
                worth{" "}
                <span className="text-primary-1 fw-600">${el?.taskPrice}</span>
              </>
            );
          } else if (el.type === "newUser") {
            description = (
              <>
                Added a new user to{" "}
                <span className="text-primary-1 fw-600">{el.taskName}</span>
              </>
            );
          } else if (el.type === "newTask") {
            description = (
              <>
                Uploaded{" "}
                <span className="text-primary-1 fw-600">{el.taskName}</span>{" "}
                worth{" "}
                <span className="text-primary-1 fw-600">${el.taskPrice}</span>
              </>
            );
          } else if (el.type === "newSubmission") {
            description = (
              <>
                Made a submission to{" "}
                <span className="text-primary-1 fw-600">{el.taskName}</span>
              </>
            );
          }

          return (
            <ActivityItem
              key={"activity-item" + idx}
              {...el}
              description={description}
            />
          );
        })
      ) : (
        <div className="text-center bg-grey-1 flex-grow-1 pt-40 p-relative">
          <img
            src="/assets/vectors/dots-4.svg"
            className="dots dots-1"
            alt="dots"
          />
          <img
            src="/assets/vectors/dots-5.svg"
            className="dots dots-2"
            alt="dots"
          />
          <img src="/assets/vectors/no-activity.svg" alt="no activity" />
          <div className="fw-600 text-light-1 mt-10 fs-14">
            No recent activity
          </div>
        </div>
      )}
    </div>
  );
};

export default Activity;
