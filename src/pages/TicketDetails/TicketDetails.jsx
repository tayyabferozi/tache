import React from "react";

import Section from "../../components/Section";
import Boxes from "./Boxes";
import Hero from "./Hero";
import Description from "./Description";
import "./TicketDetails.scss";

const TicketDetails = () => {
  return (
    <Section id="ticket-details">
      <div className="bordered">
        <Hero />
        <Boxes />
      </div>
      <Description />
    </Section>
  );
};

export default TicketDetails;
