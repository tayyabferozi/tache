import React from "react";

import Badge from "../../../components/Badge";
import Ticket from "../../../components/Ticket";
import GridContainer from "../../../components/GridContainer";
import CustomizePins from "../../../modals/CustomizePins/CustomizePins";
import useModal from "../../../hooks/useModal";
// import ProjectTile from "../../../components/PlaceholderTile";
import "./Tickets.scss";

const Tickets = ({
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
      <div className="tickets">
        <div className="mb-30 d-flex justify-content-between align-items-center">
          <Badge className="main-badge" green>
            {title}
          </Badge>

          {onCustomizePins && (
            <div
              className="customize-pin"
              onClick={() => toggleShowCustomizePinModal()}
            >
              Customize your pins
            </div>
          )}
        </div>

        <GridContainer rowClassName="g-20" rootClassName="">
          {/* <div className="col-xxl-3 col-lg-4 col-md-6">
            <ProjectTile />
          </div> */}
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
    </>
  );
};

export default Tickets;
