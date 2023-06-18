import React from "react";

import Button from "../../../../../components/Button";
import ShareTicketModal from "../../../../../modals/ShareTicket";
import useModal from "../../../../../hooks/useModal";

import "./ContentHeading.scss";
import clsx from "clsx";

const viewOptions = [
  {
    icon: "/assets/vectors/icons/view-grid.svg",
    label: "grid",
  },
  {
    icon: "/assets/vectors/icons/view-list.svg",
    label: "list",
  },
];

const ContentHeading = ({
  icon,
  title,
  view,
  setView,
  setIsInEditState,
  setTempLoading,
}) => {
  const { show: showShareModal, toggleShow: toggleShareModal } =
    useModal(false);

  return (
    <>
      <ShareTicketModal
        show={showShareModal}
        closeModal={() => toggleShareModal("close")}
      />
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-575-10 mb-10 content-heading">
        <div className="d-flex align-items-center gap-10">
          <img src={icon} alt={title} />
          <h3 className="fs-30 text-light-1 fw-500">{title}</h3>
        </div>
        <div className="d-flex gap-3">
          <Button
            onClick={() => setIsInEditState(true)}
            textClassName="text-light-1"
            className="h-40 px-3"
            bordered
          >
            Edit
          </Button>
          <Button
            textClassName="text-light-1"
            className="h-40 px-3"
            bordered
            icon={{
              src: "/assets/vectors/icons/share-2.svg",
              alt: "share",
              title: "share",
            }}
            onClick={toggleShareModal}
          >
            Share
          </Button>
          {view && (
            <div className="current-view">
              {viewOptions.map((el, idx) => {
                return (
                  <div
                    key={"pipe-content-view-optoin" + idx}
                    className={clsx(
                      "view-option",
                      view === el.label && "active"
                    )}
                    onClick={() => {
                      setView(el.label);
                      setTempLoading();
                    }}
                  >
                    <img src={el.icon} alt={el.label} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentHeading;
