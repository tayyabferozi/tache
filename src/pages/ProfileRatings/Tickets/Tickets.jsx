import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

import Ticket from "../../../components/Ticket";
import GridContainer from "../../../components/GridContainer";
import CustomizePins from "../../../modals/CustomizePins/CustomizePins";
import useModal from "../../../hooks/useModal";
import PlaceholderTile from "../../../components/PlaceholderTile";
import "./Tickets.scss";

const Tickets = ({
  className,
  icon,
  show,
  title,
  items,
  allTickets,
  onCustomizePins,
  setUser = () => {},
}) => {
  const {
    show: showCustomizePinModal,
    toggleShow: toggleShowCustomizePinModal,
  } = useModal(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {onCustomizePins && (
        <CustomizePins
          show={showCustomizePinModal}
          closeModal={() => toggleShowCustomizePinModal("close")}
          allTickets={allTickets}
          pinnedTickets={items}
          setUser={setUser}
        />
      )}
      <div className="desc-box">
        <div className="sub-page-container">
          <div className={clsx(className, "tickets")}>
            <div className="d-flex justify-content-between align-items-start align-items-sm-center flex-sm-row flex-column">
              <div
                className="d-flex justify-content-between d-sm-block w-575-100"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <h5 className="fs-22 d-flex gap-10 restrict-one-line">
                  <img src={icon} alt={title} />
                  <span className="restrict-one-line">{title}</span>
                </h5>

                <img
                  className={clsx(
                    isCollapsed && "mirrored",
                    "d-block d-sm-none"
                  )}
                  src="/assets/vectors/icons/arrow-3.svg"
                  alt="arrow"
                  title="arrow"
                />
              </div>

              {onCustomizePins && (
                <div
                  className="customize-pin text-light-1 ms-575-30 ps-2 mt-575-10"
                  onClick={() => toggleShowCustomizePinModal()}
                >
                  Customize your pins
                </div>
              )}
            </div>

            <AnimatePresence>
              {(!isCollapsed || window.innerWidth > 575) && (
                <motion.div
                  initial={{ height: "auto" }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  key="Title"
                >
                  <GridContainer rowClassName="g-20 mt-10" rootClassName="">
                    {show && onCustomizePins && items.length === 0 && (
                      <div className="col-lg-4 col-md-6">
                        <PlaceholderTile
                          onClick={() => toggleShowCustomizePinModal()}
                        />
                      </div>
                    )}
                    {show
                      ? items.map((el, idx) => {
                          return (
                            <div
                              key={title + "-ticket" + el.id + Math.random()}
                              className="col-lg-4 col-md-6"
                            >
                              <div
                                key={"project-ticket-" + idx}
                                className="project-ticket-wrap"
                              >
                                <Ticket idx={idx} {...el} />
                              </div>
                            </div>
                          );
                        })
                      : new Array(6).fill(0).map((el, idx) => {
                          return (
                            <div
                              key={"skeleton-ticket" + idx}
                              className="col-lg-4 col-md-6"
                            >
                              <Ticket skeleton />
                            </div>
                          );
                        })}
                  </GridContainer>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
