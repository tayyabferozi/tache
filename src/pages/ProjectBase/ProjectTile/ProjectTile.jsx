import React, { useState } from "react";
import clsx from "clsx";

import Button from "../../../components/Button";
import "./ProjectTile.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

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
  // isSubscribed,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <SkeletonTheme baseColor="">
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
                      src="/assets/vectors/icons/activeTickets.svg"
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
              <div className="maintainers-main">
                {maintainers?.slice(0, 6)?.map((el, idx) => (
                  <div key={"maintainer-item" + id + idx} className="item">
                    <div className="ghost">
                      <img src={el.img} alt="maintainer" />
                    </div>
                  </div>
                ))}
                {maintainers?.length > 6 && (
                  <div className="item">
                    <div className="ghost">+{maintainers.length - 6}</div>
                  </div>
                )}
              </div>
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
