import React from "react";
import Button from "../../components/Button";

import Section from "../../components/Section";
import useModal from "../../hooks/useModal";
import CreateTicketModal from "../../modals/CreateTicket";

const Landing = () => {
  const { show, toggleShow } = useModal(true);

  return (
    <Section style={{ minHeight: "50vh" }}>
      {/* Inline needs to be removed afterwards of course */}
      <CreateTicketModal show={show} closeModal={() => toggleShow("close")} />
      <Button primary onClick={toggleShow}>
        Toggle Modal
      </Button>
    </Section>
  );
};

export default Landing;
