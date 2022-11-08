import React, { useState } from "react";

import "./ProjectTickets.scss";

import Section from "../../components/Section";
import Tickets from "./Tickets/Tickets";
import MainHead from "./MainHead/MainHead";
import SubTitle from "./SubTitle/SubTitle";

const ProjectTickets = () => {
  const [searchState, setSearchState] = useState("");
  const [projectInfo] = useState({
    title: "Project Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi risus",
  });

  return (
    <Section id="project-tickets">
      <SubTitle />

      <MainHead
        searchState={searchState}
        setSearchState={setSearchState}
        data={projectInfo}
      />

      <Tickets searchState={searchState} />
    </Section>
  );
};

export default ProjectTickets;
