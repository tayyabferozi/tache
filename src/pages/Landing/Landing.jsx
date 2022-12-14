import React from "react";
import Button from "../../components/Button";

import Section from "../../components/Section";
import useModal from "../../hooks/useModal";
import CreateTicketModal from "../../modals/CreateTicket";
import DisplayTicketModal from "../../modals/DisplayTicket";

const Landing = () => {
  const {
    show: showTicketCreateModal,
    toggleShow: toggleTicketCreateModaleShow,
  } = useModal(false);
  const { show: showTicketDisplayModal, toggleShow: toggleTicketDisplayModal } =
    useModal(false);

  return (
    <Section
      style={{ minHeight: "calc(70vh)" }}
      className="d-flex align-items-center"
    >
      <CreateTicketModal
        show={showTicketCreateModal}
        closeModal={() => toggleTicketCreateModaleShow("close")}
      />
      <DisplayTicketModal
        show={showTicketDisplayModal}
        closeModal={() => toggleTicketDisplayModal("close")}
      />

      <Button primary onClick={toggleTicketCreateModaleShow}>
        Toggle Modal 1
      </Button>
      <Button className="mt-3" primary onClick={toggleTicketDisplayModal}>
        Toggle Modal 2
      </Button>
    </Section>
  );
};

export default Landing;
