import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProjectTile = ({
  id,
  title,
  date,
  access = "public",
  body,
  totalTickets,
  activeTickets,
  skeleton,
}) => {
  return (
    <SkeletonTheme>
      <div className="project-tile-wrap">
        <div className="project-tile">
          <div className="tile-head">
            <div className="left">
              {skeleton ? (
                <Skeleton width={100} />
              ) : (
                <>
                  <h5 className="fs-18">{title}</h5>
                  {date && <div className="fs-14 mt-1 date">{date}</div>}
                </>
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
                <div className="info-item">
                  <div className="item-left">
                    <div className="ticket-text d-flex align-items-center">
                      <img
                        className="me-2"
                        src="/assets/vectors/icons/totalTickets.svg"
                        alt=""
                      />{" "}
                      Total{" "}
                      <span className="ticket-text-hid ms-1"> Ticket</span>
                    </div>
                  </div>
                  <div className="item-right">{totalTickets}</div>
                </div>
                <div className="line"></div>
                <div className="info-item">
                  <div className="item-left">
                    <div className="ticket-text d-flex align-items-center">
                      <img
                        className="me-2"
                        src="/assets/vectors/icons/active-tickets.svg"
                        alt=""
                      />{" "}
                      Active{" "}
                      <span className="ticket-text-hid ms-1"> Tickets</span>
                    </div>
                  </div>
                  <div className="item-right">{activeTickets}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default ProjectTile;
