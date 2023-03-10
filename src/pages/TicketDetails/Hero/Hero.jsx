import React from "react";

import Button from "../../../components/Button";
import Breadcrumb from "../../../components/Breadcrumb";
import Badge from "../../../components/Badge";
import useModal from "../../../hooks/useModal";
import ShareTicketModal from "../../../modals/ShareTicket";
import "./Hero.scss";

const badges = [
  "Frontend",
  "Database",
  "UI",
  // "Frontend",
  // "Database",
  // "UI",
  // "Frontend",
  // "Database",
  // "UI",
  // "Frontend",
  // "Database",
  // "UI",
  // "Frontend",
  // "Database",
  // "UI",
  // "Frontend",
  // "Database",
  // "UI",
];
const breadcrumbItems = [{ text: "Home" }, { text: "Ticket Project" }];

const Hero = () => {
  const { show: showShareModal, toggleShow: toggleShareModal } =
    useModal(false);

  return (
    <>
      <ShareTicketModal
        show={showShareModal}
        closeModal={() => toggleShareModal("close")}
      />
      <div className="sub-page-container hero">
        <div className="ticket-details d-flex justify-content-between align-items-center flex-wrap gap-40">
          <div className="ticket-details__left flex-grow-1">
            <Breadcrumb items={breadcrumbItems} />
            <div className="d-flex gap-30 gap-575-20 mt-40 mt-767-30">
              <div className="img flex-shrink-0">
                <img
                  className="hero-img"
                  src="/assets/imgs/brand-dropbox.png"
                  alt="brand-dropbox"
                />
              </div>
              <div className="text">
                <h2>Ticket Title</h2>

                <div className="d-flex flex-wrap gap-3 mt-3">
                  {badges.map((el, idx) => {
                    return <Badge key={"ticket-badge" + idx}>{el}</Badge>;
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="ticket-details__right d-flex flex-md-column flex-row justify-content-center flex-wrap w-767-100 gap-10 gap-767-20"> */}
          <div className="ticket-details__right d-flex flex-column justify-content-center flex-wrap w-767-100 gap-10">
            <Button
              className="gap-10 py-10 h-40 w-md-100"
              primary
              icon={{
                src: "/assets/vectors/icons/apply.svg",
                alt: "apply",
                title: "apply",
              }}
            >
              Apply
            </Button>
            <div className="d-flex justify-content-between gap-10">
              <Button
                noText
                className="h-40 justify-content-center flex-grow-1"
                bordered
                icon={{
                  src: "/assets/vectors/icons/edit.svg",
                  alt: "edit",
                  title: "edit",
                }}
              />
              <Button
                noText
                className="h-40 justify-content-center flex-grow-1"
                bordered
                icon={{
                  src: "/assets/vectors/icons/clipboard.svg",
                  alt: "clipboard",
                  title: "clipboard",
                }}
              />
            </div>
            <div className="extras mt-10 mt-991-0 mt-575-20">
              <div className="item" onClick={toggleShareModal}>
                <img
                  src="/assets/vectors/icons/share.svg"
                  alt="share"
                  title="share"
                />
                <div className="text">Share</div>
              </div>

              <div className="item">
                <img
                  src="/assets/vectors/icons/clock-2.svg"
                  alt="clock"
                  title="clock"
                />
                <div className="text">5 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
