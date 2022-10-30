import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import Button from "../../../components/Button";
import "./ProjectTile.scss";

const ProjectTile = ({
  id,
  title,
  access = "public",
  body,
  totalTickets,
  activeTickets,
  maintainers,
  subscribes,
  // isSubscribed,
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="project-tile">
      <div className="tile-head">
        <div className="left">
          <h5 className="fs-18">{title}</h5>
        </div>
        <div className="right">
          <img
            src={
              access === "public"
                ? "/assets/vectors/icons/public.svg"
                : "/assets/vectors/icons/private.svg"
            }
            alt={access}
          />
          <div className="access">{access}</div>
        </div>
      </div>

      <div className="tile-body">{body}</div>

      <div className="tickets-info">
        <div className="info-item">
          <div className="item-left">
            <img
              src="/assets/vectors/icons/totalTickets.svg"
              alt="total-tickets"
              title="total tickets"
            />
            <div className="ticket-text">
              Total <span className="d-none d-sm-inline-block">tickets</span>
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
              Active <span className="d-none d-sm-inline-block">tickets</span>
            </div>
          </div>
          <div className="item-right">{activeTickets}</div>
        </div>
      </div>

      <div className="hr-wrap">
        <hr />
      </div>

      <div className="tile-maintainers">
        <div className="left">
          <h6>Maintainers</h6>
          <div className="maintainers-main">
            {maintainers.slice(0, 6).map((el, idx) => (
              <div key={"maintainer-item" + id + idx} className="item">
                <div className="ghost">
                  <img src={el.img} alt="maintainer" />
                </div>
              </div>
            ))}
            {maintainers.length > 6 && (
              <div className="item">
                <div className="ghost">+{maintainers.length - 6}</div>
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <Button
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={clsx(isSubscribed && "subscribed")}
            icon={{
              src: "/assets/vectors/icons/subscribe.svg",
            }}
            bordered
          >
            {subscribes}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
