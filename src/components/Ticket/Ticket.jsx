import React from "react";
import Skeleton from "react-loading-skeleton";

import Badge from "../Badge";
import "./Ticket.scss";

const Ticket = ({
  date,
  days,
  state,
  title,
  payment,
  mysteryBonus,
  body,
  idx,
  tags,
  skeleton,
  amount = true,
}) => {
  return (
    <div className="project-ticket">
      <div>
        {(days || state) && (
          <div className="top d-flex justify-content-between">
            <div className="d-flex align-items-center flex-shrink-0">
              <div className="text ms-2 flex-shrink-0 d-flex gap-2">
                {skeleton ? (
                  <Skeleton width={50} />
                ) : (
                  <>
                    <img
                      src="/assets/vectors/icons/clock.svg"
                      alt="clock"
                      title="clock"
                    />
                    <span>
                      {days} day{days > 1 ? "s" : ""}
                    </span>
                  </>
                )}
              </div>
            </div>
            {!skeleton && state && (
              <Badge green={state === "development"}>
                {state === "development" && "In Development"}
              </Badge>
            )}
          </div>
        )}

        <div className="main-info">
          {skeleton ? (
            <Skeleton width={60} circle height={60} />
          ) : (
            <img
              className="ticket-img"
              src="/assets/imgs/brand-dropbox.png"
              alt={title}
              title={title}
            />
          )}

          <div className="text">
            <h4>{skeleton ? <Skeleton width={100} /> : title}</h4>
            {date && <div className="">{date}</div>}
            {amount && (
              <div className="mt-10 d-flex gap-10">
                {skeleton ? (
                  <Skeleton width={140} />
                ) : (
                  <>
                    <img
                      src="/assets/vectors/icons/dollar-2.svg"
                      alt="dollar"
                      title="money"
                    />
                    <div className="fs-20">
                      ${payment}{" "}
                      {mysteryBonus && (
                        <span className="mystery">
                          +{" "}
                          <img
                            width={18}
                            src="/assets/vectors/icons/dollar-2.svg"
                            alt="dollar"
                            title="money"
                          />{" "}
                          ${mysteryBonus}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="fs-16 text-light-1">
          {skeleton ? (
            <Skeleton count={2} />
          ) : (
            <>{`${body.slice(0, 90)}${body.length > 90 ? "..." : ""}`}</>
          )}
        </p>
      </div>

      <div className="tags">
        {skeleton ? (
          <>
            <Skeleton width={50} />
            <Skeleton width={50} />
            <Skeleton width={50} />
          </>
        ) : (
          tags?.slice(0, 3)?.map((el, idx2) => {
            return <Badge key={"tag-badge-" + idx + idx2}>{el}</Badge>;
          })
        )}
      </div>
    </div>
  );
};

export default Ticket;
