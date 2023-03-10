import React from "react";
import clsx from "clsx";

import "./UserInfo.scss";

const UserInfo = ({ user }) => {
  return (
    <div className="desc-box p-30 p-767-20 p-575-10 " id="user-info-box">
      <div className="user-info">
        <div className="user-info-main">
          <div className="cover">
            <img
              className="cover-img"
              src="/assets/imgs/bg-profile.png"
              alt="cover"
            />
          </div>
          <div className="info-main">
            <div className="info-main__left">
              <div className="profile-img-container">
                <div className="profile-img-wrap">
                  <img
                    className="profile-img"
                    src="/assets/vectors/profile-img.svg"
                    alt="profile-img"
                  />
                  <img
                    className="profile-badge"
                    src="/assets/imgs/profile-badge.png"
                    alt="profile-img"
                  />
                </div>
              </div>
            </div>
            <div className="info-main__center">
              <div className="left">
                <h4 className="d-flex align-items-center gap-20">
                  {user.name}
                </h4>

                <div className="mt-575-1 mt-2 d-flex align-items-center gap-10">
                  <img
                    src="/assets/vectors/icons/location.svg"
                    alt="location"
                  />
                  <div className="fs-14 text-light-1">{user.location}</div>
                </div>
              </div>
              <Right className="d-none d-lg-flex" user={user} />
            </div>
          </div>
          <Right className="d-flex d-lg-none" user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

const Right = ({ className, user }) => {
  return (
    <div className={clsx("right pt-2 mt-991-1", className)}>
      <div className="info-box">
        <div className="text-focus">Ratings</div>

        <div className="d-flex">
          <div className="d-flex gap-1 flex-shrink-0 me-10">
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star.svg"
              alt="star"
              title="star"
            />
            <img
              className="d-block"
              src="/assets/vectors/icons/star-empty.svg"
              alt="star-empty"
              title="star-empty"
            />
          </div>
          <div className="">{user.rating}</div>
        </div>
      </div>
      <div className="info-box">
        <div className="text-focus">Project Completed</div>

        <div className="d-flex justify-content-between align-items-end">
          <div className="fs-20 text-light-3 fw-500">
            {user.projectsCompleted}
          </div>
          <div className="text-primary-1 fs-13">
            {user.trend}
            <img
              className="timer-icon ms-1"
              src="/assets/vectors/icons/trend-up.svg"
              alt="trend-up"
            />
          </div>
        </div>
      </div>
      <div className="info-box">
        <div className="text-focus">Project Ongoing</div>

        <div className="d-flex justify-content-between align-items-end">
          <div className="fs-20 text-light-3 fw-500">
            {user.projectsOngoing}
          </div>
          <div className="fs-13 pb-1">{user.projectsOngoingPercent} %</div>
        </div>
      </div>
    </div>
  );
};
