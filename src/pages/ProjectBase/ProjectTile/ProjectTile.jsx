import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import clsx from "clsx";

import Button from "../../../components/Button";

import "./ProjectTile.scss";
import UserList from "../../../components/UserList/UserList";

const ProjectTile = ({
  id,
  title,
  access = "public",
  body,
  totalTickets,
  activeTickets,
  maintainers,
  subscribes,
  skeleton,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <SkeletonTheme>
      <div className="project-tile-wrap">
        <div className="project-tile">
          <div className="tile-head">
            <div className="left">
              {skeleton ? (
                <Skeleton width={100} />
              ) : (
                <h5 className="fs-18">{title}</h5>
              )}
            </div>
            <div className="right">
              <div className="access">
                {skeleton ? (
                  <Skeleton width={20} />
                ) : (
                  <>
                    {" "}
                    <img
                      src={
                        access === "public"
                          ? "/assets/vectors/icons/public.svg"
                          : "/assets/vectors/icons/private.svg"
                      }
                      alt={access}
                    />
                    <div className="access-text">{access}</div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="tile-body">
            {skeleton ? (
              <>
                <Skeleton inline={false} lines={2.5} />
                <br />
                <br />
                <br />
                <Skeleton inline={false} />
              </>
            ) : (
              body
            )}
          </div>

          <div className="tickets-info">
            {!skeleton && (
              <>
                {" "}
                <div className="info-item">
                  <div className="item-left">
                    <img
                      src="/assets/vectors/icons/totalTickets.svg"
                      alt="total-tickets"
                      title="total tickets"
                    />
                    <div className="ticket-text">
                      Total{" "}
                      <span className="d-none d-sm-inline-block">tickets</span>
                    </div>
                  </div>
                  <div className="item-right">{totalTickets}</div>
                </div>
                <div className="line"></div>
                <div className="info-item">
                  <div className="item-left">
                    <img
                      src="/assets/vectors/icons/active-tickets.svg"
                      alt="active-tickets"
                      title="total tickets"
                    />
                    <div className="ticket-text">
                      Active{" "}
                      <span className="d-none d-sm-inline-block">tickets</span>
                    </div>
                  </div>
                  <div className="item-right">{activeTickets}</div>
                </div>
              </>
            )}
          </div>

          <div className="hr-wrap">
            <hr />
          </div>

          <div className="tile-maintainers">
            <div className="left">
              <h6 className="text-start">
                {skeleton ? <Skeleton width={60} /> : <>Maintainers</>}
              </h6>
              {skeleton && (
                <>
                  <br />
                  <Skeleton width={170} />
                </>
              )}
              <UserList users={maintainers} />
            </div>
            <div className="right">
              {!skeleton && (
                <Button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={clsx(
                    "subscribe-btn",
                    isSubscribed && "subscribed"
                  )}
                  icon={{
                    src: "/assets/vectors/icons/subscribe.svg",
                  }}
                  bordered
                >
                  {subscribes}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProjectTile;
