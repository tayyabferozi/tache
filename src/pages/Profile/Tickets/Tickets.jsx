import React from "react";

import Badge from "../../../components/Badge";
import Ticket from "../../../components/Ticket";
import GridContainer from "../../../components/GridContainer";
import "./Tickets.scss";

const Tickets = ({ removable, editState, show, title, items }) => {
  return (
    <div className="tickets">
      <div className="mb-30 d-flex">
        <Badge className="main-badge" green>
          {title}
        </Badge>
      </div>

      <GridContainer rowClassName="g-20" rootClassName="">
        {show
          ? items.map((el, idx) => {
              return (
                <div
                  key={title + "-ticket" + el.id + Math.random()}
                  className="col-xxl-3 col-lg-4 col-md-6"
                >
                  <div
                    key={"project-ticket-" + idx}
                    className="project-ticket-wrap"
                  >
                    {removable && editState && (
                      <img
                        className="remove"
                        src="/assets/vectors/icons/remove-2.svg"
                        alt="remove"
                      />
                    )}
                    <Ticket idx={idx} {...el} />
                  </div>
                </div>
              );
            })
          : new Array(8).fill(0).map((el, idx) => {
              return (
                <div
                  key={"skeleton-ticket" + idx}
                  className="col-xxl-3 col-lg-4 col-md-6"
                >
                  <Ticket skeleton />
                </div>
              );
            })}
      </GridContainer>
    </div>
  );
};

export default Tickets;
