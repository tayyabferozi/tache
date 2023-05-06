import React from "react";
import clsx from "clsx";

import "./Activity.scss";
import ActivityItem from "./ActivityItem/ActivityItem";

const greenTextMaxSize = 28;

const activity = [
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "newUser",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "newTask",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "newSubmission",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
  {
    icon: "/assets/vectors/activity-user-1.svg",
    type: "taskCompletion",
    name: "Nabhan Lihadillah",
    taskName: "Fintach Branding",
    taskPrice: 20,
    description: (
      <>
        Created{" "}
        <span className="text-primary-1 fw-600">
          Fintach Branding Guideline
        </span>{" "}
        worth <span className="text-light-1 fw-600">$100</span>
      </>
    ),
    time: "1m",
    likes: 34,
  },
];

const Activity = ({ showActivity, toggleActivityBar }) => {
  return (
    <div
      className={clsx("activity-wrap", !showActivity && "inactive", {
        "d-flex flex-column": !activity.length,
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
            <img
              onClick={toggleActivityBar}
              className="c-pointer"
              src="/assets/vectors/icons/arrow-circle-right.svg"
              alt="arrow circle right"
              title="arrow circle right"
            />
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