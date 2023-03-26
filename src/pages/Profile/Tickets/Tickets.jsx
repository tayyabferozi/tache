import React from "react";

import Ticket from "../../../components/Ticket";
import GridContainer from "../../../components/GridContainer";
import CustomizePins from "../../../modals/CustomizePins/CustomizePins";
import useModal from "../../../hooks/useModal";
import PlaceholderTile from "../../../components/PlaceholderTile";
import "./Tickets.scss";
import clsx from "clsx";

const Tickets = ({
  className,
  icon,
  show,
  title,
  items,
  allTickets,
  onCustomizePins,
  editState,
  setUser = () => {},
}) => {
  const {
    show: showCustomizePinModal,
    toggleShow: toggleShowCustomizePinModal,
  } = useModal(false);

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
      <div className={clsx(className, "tickets")}>
        <div className="mb-30 d-flex justify-content-between align-items-sm-end flex-sm-row flex-column">
          <h5 className="fs-22 d-flex gap-10">
            <img src={icon} alt={title} /> {title}
          </h5>

          {onCustomizePins && (
            <div
              className="customize-pin text-light-1 ms-575-30 ps-2 mt-575-10"
              onClick={() => toggleShowCustomizePinModal()}
            >
              Customize your pins
            </div>
          )}
        </div>

        <GridContainer rowClassName="g-20" rootClassName="">
          {show && onCustomizePins && items.length === 0 && (
            <div className="col-lg-4 col-md-6">
              <PlaceholderTile onClick={() => toggleShowCustomizePinModal()} />
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
      </div>
    </>
  );
};

export default Tickets;
